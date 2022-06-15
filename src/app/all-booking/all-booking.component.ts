import { AfterViewInit, Component, OnInit } from '@angular/core'
import { BookingDetail } from '../booking'
import { BookingService } from '../booking.service'
declare const $: any

@Component({
    selector: 'app-all-booking',
    templateUrl: './all-booking.component.html',
    styleUrls: ['./all-booking.component.css'],
})
export class AllBookingComponent implements OnInit {
    ngAfterViewInit(): void {}

    constructor(private bookingService: BookingService) {}

    bookings: BookingDetail[] = []

    ngOnInit(): void {
        this.bookingService.getListBooking().subscribe((data) => {
            this.bookings = data
        })
    }
}

export class NgbdPaginationBasic {
    pageSize = 10
    public data = [
        {
            id: 1,
            first_name: 'Jethro',
            last_name: 'Butland',
            email: 'jbutland0@unicef.org',
            gender: 'Male',
            ip_address: '108.104.116.6',
        },
        {
            id: 2,
            first_name: 'Even',
            last_name: 'Duferie',
            email: 'eduferie1@zdnet.com',
            gender: 'Male',
            ip_address: '171.201.185.233',
        },
        {
            id: 3,
            first_name: 'Ernaline',
            last_name: 'Regi',
            email: 'eregi2@mapy.cz',
            gender: 'Female',
            ip_address: '23.254.2.69',
        },
        {
            id: 4,
            first_name: 'Wiley',
            last_name: 'Folonin',
            email: 'wfolonin3@bravesites.com',
            gender: 'Male',
            ip_address: '135.234.136.218',
        },
        {
            id: 5,
            first_name: 'Eulalie',
            last_name: 'Bardell',
            email: 'ebardell4@tuttocitta.it',
            gender: 'Female',
            ip_address: '112.151.185.209',
        },
        {
            id: 6,
            first_name: 'Nikolia',
            last_name: 'Gunney',
            email: 'ngunney5@clickbank.net',
            gender: 'Female',
            ip_address: '122.172.213.149',
        },
        {
            id: 7,
            first_name: 'Adrea',
            last_name: 'Zum Felde',
            email: 'azumfelde6@google.com',
            gender: 'Female',
            ip_address: '176.238.201.232',
        },
        {
            id: 8,
            first_name: 'Wilbert',
            last_name: 'Davidy',
            email: 'wdavidy7@cpanel.net',
            gender: 'Male',
            ip_address: '80.21.48.54',
        },
        {
            id: 9,
            first_name: 'Tymothy',
            last_name: 'Wolland',
            email: 'twolland8@sina.com.cn',
            gender: 'Male',
            ip_address: '252.28.26.242',
        },
        {
            id: 10,
            first_name: 'Kermit',
            last_name: 'Kort',
            email: 'kkort9@seesaa.net',
            gender: 'Male',
            ip_address: '166.13.201.166',
        },
        {
            id: 11,
            first_name: 'Noland',
            last_name: 'Bastide',
            email: 'nbastidea@ebay.co.uk',
            gender: 'Male',
            ip_address: '60.237.148.119',
        },
        {
            id: 12,
            first_name: 'Wolfy',
            last_name: 'Bertomieu',
            email: 'wbertomieub@seesaa.net',
            gender: 'Male',
            ip_address: '195.180.15.81',
        },
        {
            id: 13,
            first_name: 'Joannes',
            last_name: 'Sayburn',
            email: 'jsayburnc@jigsy.com',
            gender: 'Female',
            ip_address: '242.232.5.247',
        },
        {
            id: 14,
            first_name: 'Beaufort',
            last_name: 'Roddell',
            email: 'broddelld@walmart.com',
            gender: 'Male',
            ip_address: '247.165.243.180',
        },
        {
            id: 15,
            first_name: 'Tabbie',
            last_name: 'Croy',
            email: 'tcroye@mapquest.com',
            gender: 'Male',
            ip_address: '84.16.158.195',
        },
        {
            id: 16,
            first_name: 'Gaston',
            last_name: 'Garrat',
            email: 'ggarratf@jalbum.net',
            gender: 'Male',
            ip_address: '125.254.66.66',
        },
        {
            id: 17,
            first_name: 'Marcella',
            last_name: 'Gillise',
            email: 'mgilliseg@yolasite.com',
            gender: 'Female',
            ip_address: '13.120.89.41',
        },
        {
            id: 18,
            first_name: 'Violante',
            last_name: 'Normanell',
            email: 'vnormanellh@fda.gov',
            gender: 'Female',
            ip_address: '88.17.69.193',
        },
        {
            id: 19,
            first_name: 'Seward',
            last_name: 'Halligan',
            email: 'shalligani@rediff.com',
            gender: 'Male',
            ip_address: '170.21.236.236',
        },
        {
            id: 20,
            first_name: 'Dayle',
            last_name: 'Rainsdon',
            email: 'drainsdonj@omniture.com',
            gender: 'Female',
            ip_address: '254.141.192.14',
        },
        {
            id: 21,
            first_name: 'Leonie',
            last_name: 'Mattiello',
            email: 'lmattiellok@ycombinator.com',
            gender: 'Female',
            ip_address: '51.156.94.231',
        },
        {
            id: 22,
            first_name: 'Marlowe',
            last_name: 'Falco',
            email: 'mfalcol@latimes.com',
            gender: 'Male',
            ip_address: '130.184.39.27',
        },
        {
            id: 23,
            first_name: 'Frannie',
            last_name: 'Godlonton',
            email: 'fgodlontonm@aol.com',
            gender: 'Female',
            ip_address: '41.118.80.165',
        },
        {
            id: 24,
            first_name: 'Travers',
            last_name: 'Wenden',
            email: 'twendenn@usa.gov',
            gender: 'Male',
            ip_address: '69.161.39.55',
        },
        {
            id: 25,
            first_name: 'Christi',
            last_name: 'Tixier',
            email: 'ctixiero@lulu.com',
            gender: 'Female',
            ip_address: '132.214.138.100',
        },
        {
            id: 26,
            first_name: 'Boote',
            last_name: 'Momford',
            email: 'bmomfordp@ustream.tv',
            gender: 'Male',
            ip_address: '150.45.41.62',
        },
        {
            id: 27,
            first_name: 'Josefa',
            last_name: "O'Fearguise",
            email: 'jofearguiseq@craigslist.org',
            gender: 'Female',
            ip_address: '4.179.143.30',
        },
        {
            id: 28,
            first_name: 'Sandie',
            last_name: 'Esmead',
            email: 'sesmeadr@wisc.edu',
            gender: 'Female',
            ip_address: '18.200.78.108',
        },
        {
            id: 29,
            first_name: 'Jordan',
            last_name: 'Gilhouley',
            email: 'jgilhouleys@smugmug.com',
            gender: 'Female',
            ip_address: '47.116.107.112',
        },
        {
            id: 30,
            first_name: 'Eberhard',
            last_name: 'Roches',
            email: 'erochest@tuttocitta.it',
            gender: 'Male',
            ip_address: '99.189.233.209',
        },
        {
            id: 31,
            first_name: 'Saba',
            last_name: 'McGlew',
            email: 'smcglewu@wikia.com',
            gender: 'Female',
            ip_address: '212.118.1.36',
        },
        {
            id: 32,
            first_name: 'Vachel',
            last_name: 'Brabon',
            email: 'vbrabonv@nymag.com',
            gender: 'Male',
            ip_address: '12.235.46.58',
        },
        {
            id: 33,
            first_name: 'Udale',
            last_name: 'Abeles',
            email: 'uabelesw@cam.ac.uk',
            gender: 'Male',
            ip_address: '13.49.151.206',
        },
        {
            id: 34,
            first_name: 'Raddie',
            last_name: 'Tingly',
            email: 'rtinglyx@ovh.net',
            gender: 'Male',
            ip_address: '213.29.152.122',
        },
        {
            id: 35,
            first_name: 'Remington',
            last_name: 'Delagua',
            email: 'rdelaguay@opensource.org',
            gender: 'Male',
            ip_address: '143.3.84.113',
        },
        {
            id: 36,
            first_name: 'Jarrod',
            last_name: 'Scocroft',
            email: 'jscocroftz@engadget.com',
            gender: 'Male',
            ip_address: '240.173.164.203',
        },
        {
            id: 37,
            first_name: 'Austina',
            last_name: 'Furtado',
            email: 'afurtado10@gnu.org',
            gender: 'Female',
            ip_address: '111.238.33.232',
        },
        {
            id: 38,
            first_name: 'Beau',
            last_name: 'Gillibrand',
            email: 'bgillibrand11@canalblog.com',
            gender: 'Male',
            ip_address: '214.17.51.126',
        },
        {
            id: 39,
            first_name: 'Nealy',
            last_name: 'Koppeck',
            email: 'nkoppeck12@phpbb.com',
            gender: 'Male',
            ip_address: '34.78.222.61',
        },
        {
            id: 40,
            first_name: 'Mendie',
            last_name: 'Tyrrell',
            email: 'mtyrrell13@chronoengine.com',
            gender: 'Male',
            ip_address: '177.32.220.91',
        },
        {
            id: 41,
            first_name: 'Antonina',
            last_name: "O'Doireidh",
            email: 'aodoireidh14@bbb.org',
            gender: 'Female',
            ip_address: '217.160.6.163',
        },
        {
            id: 42,
            first_name: 'Beatrix',
            last_name: 'Krauss',
            email: 'bkrauss15@go.com',
            gender: 'Female',
            ip_address: '246.4.144.244',
        },
        {
            id: 43,
            first_name: 'Adolf',
            last_name: 'Matusevich',
            email: 'amatusevich16@census.gov',
            gender: 'Male',
            ip_address: '81.77.32.70',
        },
        {
            id: 44,
            first_name: 'Guendolen',
            last_name: 'Cunah',
            email: 'gcunah17@google.ca',
            gender: 'Female',
            ip_address: '70.129.196.142',
        },
        {
            id: 45,
            first_name: 'Stinky',
            last_name: 'Saywood',
            email: 'ssaywood18@ifeng.com',
            gender: 'Male',
            ip_address: '188.22.19.199',
        },
        {
            id: 46,
            first_name: 'Hilary',
            last_name: 'Johann',
            email: 'hjohann19@github.com',
            gender: 'Male',
            ip_address: '72.33.96.65',
        },
        {
            id: 47,
            first_name: 'Franky',
            last_name: 'Bavin',
            email: 'fbavin1a@discovery.com',
            gender: 'Male',
            ip_address: '42.162.59.48',
        },
        {
            id: 48,
            first_name: 'Aliza',
            last_name: 'Arber',
            email: 'aarber1b@booking.com',
            gender: 'Female',
            ip_address: '45.182.127.221',
        },
        {
            id: 49,
            first_name: 'Lorenzo',
            last_name: 'Ranahan',
            email: 'lranahan1c@blogger.com',
            gender: 'Male',
            ip_address: '220.91.190.153',
        },
        {
            id: 50,
            first_name: 'Waldemar',
            last_name: 'Josephy',
            email: 'wjosephy1d@hp.com',
            gender: 'Male',
            ip_address: '44.68.137.28',
        },
        {
            id: 51,
            first_name: 'Jarvis',
            last_name: 'Schimmang',
            email: 'jschimmang1e@opera.com',
            gender: 'Male',
            ip_address: '94.2.156.13',
        },
        {
            id: 52,
            first_name: 'Madeline',
            last_name: 'Howlin',
            email: 'mhowlin1f@addtoany.com',
            gender: 'Female',
            ip_address: '0.117.14.53',
        },
        {
            id: 53,
            first_name: 'Izzy',
            last_name: 'Delacroux',
            email: 'idelacroux1g@nsw.gov.au',
            gender: 'Male',
            ip_address: '80.137.219.96',
        },
        {
            id: 54,
            first_name: 'Hendrika',
            last_name: 'Grevatt',
            email: 'hgrevatt1h@typepad.com',
            gender: 'Female',
            ip_address: '50.223.223.37',
        },
        {
            id: 55,
            first_name: 'Lindsey',
            last_name: 'Cunney',
            email: 'lcunney1i@icq.com',
            gender: 'Female',
            ip_address: '180.205.189.29',
        },
        {
            id: 56,
            first_name: 'Micky',
            last_name: 'Piaggia',
            email: 'mpiaggia1j@360.cn',
            gender: 'Female',
            ip_address: '56.165.195.118',
        },
        {
            id: 57,
            first_name: 'Jackqueline',
            last_name: 'Drache',
            email: 'jdrache1k@comsenz.com',
            gender: 'Female',
            ip_address: '22.14.20.120',
        },
        {
            id: 58,
            first_name: 'Jeromy',
            last_name: 'Goulter',
            email: 'jgoulter1l@usatoday.com',
            gender: 'Male',
            ip_address: '49.39.163.192',
        },
        {
            id: 59,
            first_name: 'Farrand',
            last_name: 'Broadbridge',
            email: 'fbroadbridge1m@cnn.com',
            gender: 'Female',
            ip_address: '210.219.27.199',
        },
        {
            id: 60,
            first_name: 'Alisa',
            last_name: 'Sans',
            email: 'asans1n@1und1.de',
            gender: 'Female',
            ip_address: '37.55.227.130',
        },
        {
            id: 61,
            first_name: 'Bessy',
            last_name: 'Matyas',
            email: 'bmatyas1o@plala.or.jp',
            gender: 'Female',
            ip_address: '21.84.47.246',
        },
        {
            id: 62,
            first_name: 'Gratiana',
            last_name: 'Mealand',
            email: 'gmealand1p@mayoclinic.com',
            gender: 'Female',
            ip_address: '78.189.144.156',
        },
        {
            id: 63,
            first_name: 'Merwyn',
            last_name: 'Kinnen',
            email: 'mkinnen1q@cdc.gov',
            gender: 'Male',
            ip_address: '30.232.202.9',
        },
        {
            id: 64,
            first_name: 'Granny',
            last_name: 'Ganny',
            email: 'gganny1r@comcast.net',
            gender: 'Male',
            ip_address: '136.146.4.30',
        },
        {
            id: 65,
            first_name: 'Nataline',
            last_name: 'Rauprich',
            email: 'nrauprich1s@dmoz.org',
            gender: 'Female',
            ip_address: '48.54.218.242',
        },
        {
            id: 66,
            first_name: 'Hyacinthie',
            last_name: 'Gothrup',
            email: 'hgothrup1t@cam.ac.uk',
            gender: 'Female',
            ip_address: '34.164.172.19',
        },
        {
            id: 67,
            first_name: 'Cherrita',
            last_name: 'Dumigan',
            email: 'cdumigan1u@gravatar.com',
            gender: 'Female',
            ip_address: '102.42.218.45',
        },
        {
            id: 68,
            first_name: 'Jarrod',
            last_name: 'Pabelik',
            email: 'jpabelik1v@dailymail.co.uk',
            gender: 'Male',
            ip_address: '223.27.100.245',
        },
        {
            id: 69,
            first_name: 'Tersina',
            last_name: 'Benion',
            email: 'tbenion1w@ucla.edu',
            gender: 'Female',
            ip_address: '69.180.188.57',
        },
        {
            id: 70,
            first_name: 'Nancy',
            last_name: 'Pallister',
            email: 'npallister1x@opensource.org',
            gender: 'Female',
            ip_address: '221.22.210.236',
        },
        {
            id: 71,
            first_name: 'Addie',
            last_name: 'Whiteson',
            email: 'awhiteson1y@stumbleupon.com',
            gender: 'Male',
            ip_address: '79.93.211.55',
        },
        {
            id: 72,
            first_name: 'Reta',
            last_name: 'Pashbee',
            email: 'rpashbee1z@disqus.com',
            gender: 'Female',
            ip_address: '73.20.198.120',
        },
        {
            id: 73,
            first_name: 'Tova',
            last_name: 'Strathearn',
            email: 'tstrathearn20@godaddy.com',
            gender: 'Female',
            ip_address: '162.181.226.254',
        },
        {
            id: 74,
            first_name: 'Elle',
            last_name: 'Strute',
            email: 'estrute21@intel.com',
            gender: 'Female',
            ip_address: '139.174.201.163',
        },
        {
            id: 75,
            first_name: 'Janelle',
            last_name: 'Herrero',
            email: 'jherrero22@webnode.com',
            gender: 'Female',
            ip_address: '114.113.144.38',
        },
        {
            id: 76,
            first_name: 'Gena',
            last_name: 'Sproule',
            email: 'gsproule23@ycombinator.com',
            gender: 'Female',
            ip_address: '184.126.143.180',
        },
        {
            id: 77,
            first_name: 'Gothart',
            last_name: 'Schiementz',
            email: 'gschiementz24@state.tx.us',
            gender: 'Male',
            ip_address: '213.71.18.49',
        },
        {
            id: 78,
            first_name: 'Sidoney',
            last_name: 'Rutherforth',
            email: 'srutherforth25@yolasite.com',
            gender: 'Female',
            ip_address: '243.163.212.137',
        },
        {
            id: 79,
            first_name: 'Bevon',
            last_name: 'Welsby',
            email: 'bwelsby26@foxnews.com',
            gender: 'Male',
            ip_address: '89.50.241.29',
        },
        {
            id: 80,
            first_name: 'Deina',
            last_name: 'Bignal',
            email: 'dbignal27@dropbox.com',
            gender: 'Female',
            ip_address: '212.10.202.97',
        },
        {
            id: 81,
            first_name: 'Hermy',
            last_name: 'Sesser',
            email: 'hsesser28@hud.gov',
            gender: 'Male',
            ip_address: '114.6.37.36',
        },
        {
            id: 82,
            first_name: 'Rebecca',
            last_name: 'Shallcrass',
            email: 'rshallcrass29@yellowpages.com',
            gender: 'Female',
            ip_address: '86.186.159.154',
        },
        {
            id: 83,
            first_name: 'Moria',
            last_name: 'Cochern',
            email: 'mcochern2a@reddit.com',
            gender: 'Female',
            ip_address: '6.193.12.145',
        },
        {
            id: 84,
            first_name: 'Giacopo',
            last_name: 'Bernuzzi',
            email: 'gbernuzzi2b@goodreads.com',
            gender: 'Male',
            ip_address: '60.136.83.153',
        },
        {
            id: 85,
            first_name: 'Parnell',
            last_name: 'Ransfield',
            email: 'pransfield2c@sphinn.com',
            gender: 'Male',
            ip_address: '207.183.178.209',
        },
        {
            id: 86,
            first_name: 'Sterne',
            last_name: 'Brandrick',
            email: 'sbrandrick2d@quantcast.com',
            gender: 'Male',
            ip_address: '194.222.233.52',
        },
        {
            id: 87,
            first_name: 'Alastair',
            last_name: 'Droghan',
            email: 'adroghan2e@census.gov',
            gender: 'Male',
            ip_address: '122.54.170.153',
        },
        {
            id: 88,
            first_name: 'Darsie',
            last_name: 'Egdal',
            email: 'degdal2f@economist.com',
            gender: 'Female',
            ip_address: '39.71.149.75',
        },
        {
            id: 89,
            first_name: 'Jyoti',
            last_name: 'Shemilt',
            email: 'jshemilt2g@fastcompany.com',
            gender: 'Female',
            ip_address: '206.82.56.137',
        },
        {
            id: 90,
            first_name: 'Sylvia',
            last_name: 'Weinmann',
            email: 'sweinmann2h@w3.org',
            gender: 'Female',
            ip_address: '190.154.233.33',
        },
        {
            id: 91,
            first_name: 'Hube',
            last_name: 'Burds',
            email: 'hburds2i@google.it',
            gender: 'Male',
            ip_address: '25.189.44.22',
        },
        {
            id: 92,
            first_name: 'Sue',
            last_name: 'Mutch',
            email: 'smutch2j@shareasale.com',
            gender: 'Female',
            ip_address: '250.107.249.212',
        },
        {
            id: 93,
            first_name: 'Laurie',
            last_name: 'Giacomucci',
            email: 'lgiacomucci2k@jalbum.net',
            gender: 'Male',
            ip_address: '207.146.21.177',
        },
        {
            id: 94,
            first_name: 'Aigneis',
            last_name: 'Hazeltine',
            email: 'ahazeltine2l@ycombinator.com',
            gender: 'Female',
            ip_address: '195.214.255.180',
        },
        {
            id: 95,
            first_name: 'Nolana',
            last_name: 'Pilkington',
            email: 'npilkington2m@cyberchimps.com',
            gender: 'Female',
            ip_address: '99.178.205.28',
        },
        {
            id: 96,
            first_name: 'Margalit',
            last_name: 'Norsister',
            email: 'mnorsister2n@discovery.com',
            gender: 'Female',
            ip_address: '93.173.70.126',
        },
        {
            id: 97,
            first_name: 'Audrie',
            last_name: 'Janczyk',
            email: 'ajanczyk2o@simplemachines.org',
            gender: 'Female',
            ip_address: '121.69.119.102',
        },
        {
            id: 98,
            first_name: 'Annmarie',
            last_name: 'Humburton',
            email: 'ahumburton2p@biglobe.ne.jp',
            gender: 'Female',
            ip_address: '202.108.4.73',
        },
        {
            id: 99,
            first_name: 'Patience',
            last_name: 'Ruslen',
            email: 'pruslen2q@ebay.co.uk',
            gender: 'Female',
            ip_address: '177.187.143.236',
        },
        {
            id: 100,
            first_name: 'Virgie',
            last_name: 'Sagg',
            email: 'vsagg2r@blog.com',
            gender: 'Female',
            ip_address: '193.134.165.63',
        },
    ]
    page = 4
}
