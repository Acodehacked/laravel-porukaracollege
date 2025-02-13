<?php

namespace App\Http\Controllers;

use App\Mail\WebcodeEmail;
use App\Models\Webcode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class WebcodeController extends Controller
{
    public function create(Request $request){
        $name = $request->get('name');
        $phone = $request->get('phone');
        $mail = $request->get('mail');
        $type = $request->get('type');
        $message = $request->get('message');

        $item = Webcode::create([
            'name'=>$name,
            'phone'=>$phone,
            'mail'=>$mail,
            'type'=>$type,
            'message'=>$message]);

        Mail::to('abina5448@gmail.com')->send(new WebcodeEmail($item));
        return response()->json('Message sent!');
    }

}
