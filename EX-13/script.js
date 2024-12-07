function createCard(_title, _cName, _views, _monthsOld, _duration, _thumbnail) {
  let title = document.getElementById("ttl");
  let cName = document.getElementById("cnme");
  let views = document.getElementById("vws");
  let monthsOld = document.getElementById("mths");
  let duration = document.getElementById("dur");
  let thumbnail = document.getElementById("thm");

  title.innerHTML = `<p>${_title}</p>`;
  cName.innerHTML = `<span>${_cName}</span>`;
  views.innerHTML = `<span>${_views} views</span>`;
  monthsOld.innerHTML = `${_monthsOld} months ago`;
  duration.innerHTML = `${_duration}`;
  thumbnail.src = `${_thumbnail}`;
}

createCard(
  "Youtube Thumbnail Design Tutorial for Beginners",
  "Tutorial Point",
  "5M",
  5,
  "02:54:23",
  "https://media.licdn.com/dms/image/v2/D5612AQEC2GNEaVOqHQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709846879463?e=2147483647&v=beta&t=3oEOdpoAqT2j-2fuf4KzvbuNtxTkQVdaoy3wwqnMdrM"
);
