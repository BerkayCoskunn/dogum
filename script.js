const correctPassword = "06521975"; // Şifreyi burada belirliyoruz

// Şifre kontrol fonksiyonu
function checkPassword() {
    const userPassword = document.getElementById("password").value;
    if (userPassword === correctPassword) {
        document.getElementById("login-container").style.display = "none";  // Şifre doğruysa giriş alanını gizle
        document.getElementById("surprise-container").style.display = "block"; // Surprise butonunu göster
    } else {
        alert("Şifre yanlış, lütfen tekrar deneyin.");  // Şifre yanlışsa uyarı ver
    }
}

// Video izleme fonksiyonu
function showVideo() {
    document.getElementById("surprise-container").style.display = "none"; // Surprise butonunu gizle
    document.getElementById("video-container").style.display = "block"; // Video alanını göster
    const video = document.getElementById("birthday-video");
    video.play();

    video.onended = function() {
        document.getElementById("video-container").style.display = "none"; // Video bitince video alanını gizle
        document.getElementById("feedback-container").style.display = "block"; // Geri bildirim alanını göster
    };
}

// Geri bildirim gönderme fonksiyonu
function submitFeedback() {
    const feedback = document.getElementById("feedback").value;
    if (feedback) {
        sendEmail(feedback); // Geri bildirimi e-posta olarak göndereceğiz
    } else {
        alert("Lütfen bir mesaj yazın!"); // Mesaj yazılmadıysa uyarı ver
    }
}

// E-posta gönderme fonksiyonu (backend ile yapılabilir, burada basitçe bir örnek):
function sendEmail(feedback) {
    const emailBody = `Kız arkadaşımın doğum günü videosuna verdiği geri dönüş:\n\n${feedback}`;
    
    window.location.href = `mailto:your-email@example.com?subject=Doğum Günü Geri Dönüşü&body=${encodeURIComponent(emailBody)}`;
}
