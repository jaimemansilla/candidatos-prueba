<?php

namespace App\Http\Controllers;

use App\Email;
use App\EmailTo;
use App\EmailCc;
use App\EmailCco;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmailController extends Controller
{

    public function store(Request $request)
    {

        if (!$request->has(['to', 'cc', 'cco', 'subject', 'body'])) {
            return response()->json([
                'success' => false,
                'message' => 'Solicitud mal formada.'
            ], 400);
        } else {
            if (empty($request->to)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se ha indicado destinatario.'
                ], 400);
            }
            if(empty($request->subject)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se ha indicado asunto.'
                ], 400);
            }
            if(empty($request->body)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se ha introducido cuerpo del mensaje.'
                ], 400);
            }
        }

        DB::beginTransaction();
        try {
            $email = new Email();
            $email->subject = $request->subject;
            $email->body = $request->body;
            $email->save();

            foreach($request->to as $to) {
                $emailTo = new EmailTo();
                $emailTo->email_address = $to;
                $emailTo->email_id = $email->id;
                $emailTo->save();
            }

            foreach($request->cc as $cc) {
                $emailCc = new EmailCc();
                $emailCc->email_address = $cc;
                $emailCc->email_id = $email->id;
                $emailCc->save();
            }

            foreach($request->cco as $cco) {
                $emailCco = new EmailCco();
                $emailCco->email_address = $cco;
                $emailCco->email_id = $email->id;
                $emailCco->save();
            }

            DB::commit();

            return response()->json([
                'success' => true,
                'mail' => Email::with(['to', 'cc', 'cco'])->where('id', $email->id)->first()
            ], 200);
        
        } catch (\Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'message' => 'Error al procesar la solicitud.'
            ], 500);
        }
    }

}
