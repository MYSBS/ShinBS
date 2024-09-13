
// 척추요정 비디오 숨기기/보이기
const accordionBtn = document.querySelector('.accordion-btn');
const accordionContent = document.querySelector('.accordion-content');

accordionBtn.addEventListener('click', () => {
    // 숨기기/보이기 효과
    if (accordionContent.style.display === "none" || accordionContent.style.display === "") {
    accordionContent.style.display = "block";
      accordionBtn.textContent = "Hide Video"; 
    } else {
    accordionContent.style.display = "none";
      accordionBtn.textContent = "Show Video"; 
    }
});

// iOS 비디오 숨기기/보이기
const iosBtn = document.getElementById('iosBtn');
const iosVideo = document.getElementById('iosVideo');

iosBtn.addEventListener('click', () => {
    if (iosVideo.style.display === "none" || iosVideo.style.display === "") {
        iosVideo.style.display = "block";
        iosBtn.textContent = "Hide iOS Video";
    } else {
        iosVideo.style.display = "none";
        iosBtn.textContent = "Show iOS Video";
    }
});


// Android(Unity) 비디오 숨기기/보이기
const androidBtn = document.getElementById('androidBtn');
const androidVideo = document.getElementById('androidVideo');

androidBtn.addEventListener('click', () => {
    if (androidVideo.style.display === "none" || androidVideo.style.display === "") {
        androidVideo.style.display = "block";
        androidBtn.textContent = "Hide Android (Unity) Video";
    } else {
        androidVideo.style.display = "none";
        androidBtn.textContent = "Show Android (Unity) Video";
    }
});