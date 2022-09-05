import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ISlide } from 'src/app/core/models/Slide';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    slides: ISlide[] = [
        {
            feedback:
                'Everyone loves it, it has democratized our finance function. In some ways Foxxy shattered hierarchy and brought us together.',
            employeeName: 'BHARATH SUNDAR',
            image: '../../../assets/logo/ebay.svg',
        },
        {
            feedback:
                'Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others.',
            employeeName: 'KERRY PARKER-EVANS',
            image: '../../../assets/logo/detroit-red-wings.svg',
        },
        {
            feedback:
                'Foxxy makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have been key.',
            employeeName: 'HAYDON DOTSON',
            image: '../../../assets/logo/egencia.svg',
        },
        {
            feedback:
                'With the use of Foxxy, we can now limit the number of meetings we have regarding specific projects and turn to Foxxy for updates instead.',
            employeeName: 'HALEY ENNES',
            image: '../../../assets/logo/sprout-social.svg',
        },
    ];
    
    carouselOptions: OwlOptions = {
        autoplay: true,
        autoWidth: true,
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        pullDrag: false,
        dots: true,
        navSpeed: 700,
        responsive: {
            0: {
                items: 1,
            },
        },
    };

    ngOnInit(): void {}
}
