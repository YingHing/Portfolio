<?php

require 'phpmailer/PHPMailerAutoload.php';

$errors = [];

if(isset($_POST['email'], $_POST['message'])){
 
    $fields = [ 
        'email' => $_POST['email'],
        'message' => $_POST['message']
    ];
    
    foreach($fields as $field => $data){
        if(empty($data)){
            $errors[] = 'Je mist je ' . $field . '  nog';
        }
    }
    if(empty($errors)){          
        $mail = new PHPMailer;
        //$mail->isSMTP();
        $mail = new PHPMailer(); // create a new object
        $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
        $mail->SMTPAuth = true; // authentication enabled
        $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
        $mail->Host = "smtp.gmail.com";
        $mail->Port = 587; // or 587
        $mail->isHTML(true);
        $mail->SMTPSecure = 'ssl';

        $mail->Subject = 'Contact form by -' . $fields['email'] .' ';
        $mail->Body = 'From: ' . $fields['email'] . '<p>' . $fields['message'] . '</p>';
        $mail->FromName = 'Portfolio website';
      
        $mail->AddAddress('studiolamby@gmail.com', 'Yinghing Lam');
        
        if(!$mail->send()){
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
}   
    }
        
} else{
       echo 'Mail is broken';
}

echo "<script>location.href='../../index.html'</script>";

?>