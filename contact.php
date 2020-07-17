<?php
    $my_email = "maximilianvons@gmail.com";
    $name = htmlspecialchars($_POST['name']);
    $sender_email  = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $pref = htmlspecialchars($_POST['com-pref']);
    $msg = htmlspecialchars($_POST['message']);

    echo  $name, ' ', $sender_email, ' ', $phone, ' ', $pref, ' ', $msg;
    
   
    $to = $my_email;
    $email_subject = "Contact form submission: $name";
    $email_body = "You have received a message. Here are the details:\nName: $name\nEmail: $sender_email\nPhone: $phone\nContact preference: $pref\nMessage: $msg";
    $headers = "From: form@maximilian.netlify.app" . "\r\n" . 
                "Reply-To: $sender_email";
    
    mail($to,$email_subject,$email_body, $headers);

    header('Location: contact_finished.html');
?>



