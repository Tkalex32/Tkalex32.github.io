const photoOne = {
  src: 'img/new-york.jpg',
  title: 'New York',
  desc: 'photo one desc'
};
const photoTwo = {
  src: 'img/architecture.jpg',
  title: 'Architecture',
  desc: 'photo two desc'
};
const photoThree = {
  src: 'img/brooklyn-bridge.jpg',
  title: 'Brooklyn Bridge',
  desc: 'photo three desc'
};
const photoFour = {
  src: 'img/central-park.jpg',
  title: 'Central Park',
  desc: 'photo four desc'
};
const photoFive = {
  src: 'img/chinatown.jpg',
  title: 'Chinatown',
  desc: 'photo five desc'
};
const photoSix = {
  src: 'img/grand-central-station.jpg',
  title: 'Grand Central Station',
  desc: 'photo six desc'
};
const photoSeven = {
  src: 'img/statue-of-liberty.jpg',
  title: 'Statue of Liberty',
  desc: 'photo seven desc'
};
const photoEight = {
  src: 'img/aerial-view.jpg',
  title: 'Aerial View',
  desc: 'photo eight desc'
};


const photos = [photoOne, photoTwo, photoThree, photoFour, photoFive, photoSix, photoSeven, photoEight];

let currentPhoto = 0;

let loadPhoto = photoNumber => {
  $('div.thumbnail').removeClass('selected');
  $('#photo').attr('src', photos[photoNumber].src);
  $('#photo').attr('alt', photos[photoNumber].title);
  $('#photo-title').text(photos[photoNumber].title);
  $('#photo-description').text(photos[photoNumber].desc);
  $('.pics .thumbnail:nth-child(' + (photoNumber + 1) + ')').toggleClass('selected');
  currentPhoto = photoNumber;
  //$('footer').text(`${currentPhoto} - ${photoNumber}`);
}

let thumbs = photos.forEach( (photo, index) => {
  $('.pics').append(`<div class="thumbnail"><img src="${photo.src}" alt="${photo.title}" idx="${index}"><div class="title">${photo.title}</div></div>`);
});

$('.pics img').click( event => {
  let targetIdx = parseInt($(event.target).attr('idx'));
  loadPhoto(targetIdx);
});

$('.right').click(() => {
  if ( currentPhoto < 7 ) {
    currentPhoto++;
    loadPhoto(currentPhoto);
    } else {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
    };
})

$('.left').click(() => {
  if ( currentPhoto > 0 ) {
    currentPhoto--;
    loadPhoto(currentPhoto);
    } else {
    currentPhoto = 7;
    loadPhoto(currentPhoto);
    };
})

loadPhoto(currentPhoto);
