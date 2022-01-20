const a = document.querySelector.bind(document)
const aa = document.querySelectorAll.bind(document)

const exploreItems = aa('.explore__item')
const closeExplore = a('.explore__menu-item')
const exploreList = a('.explore__list')
const exploreListSidebar = a('.explore__sidebar-list')
const videoNode = a('.tab--explore')
const iframe = a('iframe')
// const nameIframe = a('.explore__playlist-title-song')

console.log()

const explore = {
    currentIndex: 0,
    videos: [
        {
            songName: 'Em Hát Ai Nghe',
            songImg: './data/img-explore/emhat.jpg',
            authorName: 'huu',
            authorImg: './assets/img/cltc.jpg',
            src: 'https://www.youtube.com/embed/gDzzEo5nrCM',
        },
        {
            songName: 'Nụ Cười Xuân',
            songImg: './data/img-explore/ncxuan.jpg',
            authorName: 'H2k',
            authorImg: './data/author-explore/h2k.jpg',
            src: 'https://www.youtube.com/embed/r-pjlntJrJs',
        },
        {
            songName: 'Có Hẹn Với Thanh Xuân',
            songImg: './data/img-explore/cohvtxuan.jpg',
            authorName: 'Hà Hữu',
            authorImg: './assets/img/hữu.JPEG',
            src: 'https://www.youtube.com/embed/vpRi8S6uXAg',
        },
        {
            songName: 'Chạnh Lòng Thương Cô',
            songImg: './data/img-explore/clthugco.jpg',
            authorName: 'Huy Vạc x Hưng Hách',
            authorImg: '',
            src: 'https://www.youtube.com/embed/xJa2vKez9XI',
        },
        {
            songName: 'Đom Đóm',
            songImg: './data/img-explore/domdom.jpg',
            authorName: 'Jack',
            authorImg: './data/author-explore/jack.jpg',
            src: 'https://www.youtube.com/embed/4CCGI83vOVo',
        },
        {
            songName: 'Kẹo Bông Gòn',
            songImg: './data/img-explore/kẹobgonf.jpg',
            authorName: 'H2k',
            authorImg: './data/author-explore/h2k.jpg',
            src: 'https://www.youtube.com/embed/sHa5nQO3jwA',
        },
        {
            songName: 'Em Không Sai Chúng Ta Sai',
            songImg: './data/img-explore/eksaicta.jpg',
            authorName: 'ERIK',
            authorImg: './data/author-explore/erik.jpg',
            src: 'https://www.youtube.com/embed/iwGuiSnr2Qc',
        },
        {
            songName: 'Mang Tiền Về Cho Mẹ',
            songImg: './data/img-explore/mtvechome.jpg',
            authorName: 'ĐEn x Vâu',
            authorImg: './data/author-explore/denvau.jpg',
            src: 'https://www.youtube.com/embed/UVbv-PJXm14',
        },
        
    ],

    renderExplore: function() {
        const htmls = this.videos.map((video, index) => {
            return  `
            <div class="col l-4 m-6 c-12 video--playlist" data-index="${index}">
                <div class="explore__item">
                    <div class="explore__item-image">
                        <img src="${video.songImg}" alt="" class="explore__item-img">
                        <div class="explore__item-image-icon">
                            <i class="bi bi-play-fill"></i>
                        </div>
                    </div>

                    <div class="explore__item-song">
                        <img src="${video.authorImg}" alt="" class="explore__item-song-img">
                        <div class="explore__item-song-info">
                            <h3 class="explore__song-name"> ${video.songName}</h3>
                            <span class="explore__song-author">${video.authorName}</span>
                        </div>
                    </div>
                </div>
            </div>
            `
        })       
        exploreList.innerHTML = htmls.join('')
    },
    renderSidebar: function() {
        const htmls1 = this.videos.map((video, index) => {
            return `
            <div class="explore__sidebar-item ${index === this.currentIndex ? 'play--video' : ''}" data-index="${index}">
                <div class="explore__sidebar-item-image">
                    <img src="${video.songImg}" alt="" class="explore__sidebar-item-img">
                </div>

                <div class="explore__sidebar-item-info">
                    <h3 class="explore__sidebar-info-name">${video.songName}</h3>
                    <span class="explore__sidebar-info-author">${video.authorName}</span>
                </div>

                <div class="explore__sidebar-item-icon">
                    <i class="bi bi-play-fill"></i>
                 </div>

                <span class="play-video">Đang Phát</span>
            </div>
            `
        })
        exploreListSidebar.innerHTML = htmls1.join('')
    },

    handleEvent: function() {
        const _this = this;
        // MỞ TAP VIDEO
        exploreList.onclick = function(e) {
            const videoItem = e.target.closest('.video--playlist')
            videoNode.classList.add('active--video')
            _this.currentIndex = Number(videoItem.dataset.index);
            _this.loatcurrentVideo();
            _this.renderSidebar();
      
        },
        exploreListSidebar.onclick = function(e) {
            const videoItem2 = e.target.closest('.explore__sidebar-item')

            _this.currentIndex = Number(videoItem2.dataset.index);
            _this.loatcurrentVideo();
            _this.renderSidebar();
        },
        // ĐÓNG TAB VIDEO
        closeExplore.onclick = function() {
            a('.tab--explore').classList.remove('active--video')
        }
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentVideo', {
            get: function() {
                return this.videos[this.currentIndex]
            }
        })
    },

    loatcurrentVideo: function() {
        a('.explore__title-info-author').textContent = this.currentVideo.authorName
        a('.explore__title-info-name').textContent = this.currentVideo.songName
        a('.explore__title-introl-img').src = this.currentVideo.authorImg

        iframe.src = this.currentVideo.src
    },

    

    start: function() {
        this.defineProperties();
        this.renderExplore();
        this.renderSidebar();
        this.loatcurrentVideo();
        this.handleEvent();
    }
}




explore.start();
