const images = ['new/1.jpg',
                'new/2.jpg',
                'new/3.jpg'];

const firstImage = 0;
const last = images.length-1;

let currentImage = 0;

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('Prev');

nextBtn.addEventListener('click',function(){
    imageTag = document.getElementById('image');
    currentImage++;
    if(currentImage <= (images.length)-1){
        imageTag.src = images[currentImage];
        document.getElementById('info').innerHTML= (currentImage +1) + '/3';
    }
});

prevBtn.addEventListener('click',function(){
    if(currentImage>=0){
    currentImage--;
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML= (currentImage +1) + '/3'
    }
})