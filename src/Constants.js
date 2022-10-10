export const mobile = {name:'mobile',
    url:'https://www.gadget4india.com/api/mobilelist?',
    new:'mobileGeneral__release_date',
    old:'-mobileGeneral__release_date',
    low:'mobileGeneral__price',
    high:'-mobileGeneral__price',
    filter:[{
        nameObj:'BRAND',
        checkItem:[{nameobj:'Realme',idobj:'realme',query:'&mobileNames__brandName__brand_name__in=', qValue:',Realme'},
        {nameobj:'POCO',idobj:'poco',query:'&mobileNames__brandName__brand_name__in=', qValue:',POCO'},
        {nameobj:'Xiaomi',idobj:'xiaomi',query:'&mobileNames__brandName__brand_name__in=', qValue:',Xiaomi'},
        {nameobj:'Apple',idobj:'apple',query:'&mobileNames__brandName__brand_name__in=', qValue:',Apple'},
        {nameobj:'Oppo',idobj:'oppo',query:'&mobileNames__brandName__brand_name__in=', qValue:',Oppo'},
        {nameobj:'Nokia',idobj:'nokia',query:'&mobileNames__brandName__brand_name__in=', qValue:',Nokia'},
        {nameobj:'IQOO',idobj:'iqoo',query:'&mobileNames__brandName__brand_name__in=', qValue:',IQOO'},
        {nameobj:'OnePlus',idobj:'oneplus',query:'&mobileNames__brandName__brand_name__in=', qValue:',OnePlus'},
        {nameobj:'Samsung',idobj:'samsung',query:'&mobileNames__brandName__brand_name__in=', qValue:',Samsung'},
        {nameobj:'Vivo',idobj:'vivo',query:'&mobileNames__brandName__brand_name__in=', qValue:',Vivo'},
        {nameobj:'Google',idobj:'google',query:'&mobileNames__brandName__brand_name__in=', qValue:',Google'},
        {nameobj:'Nothing',idobj:'nothing',query:'&mobileNames__brandName__brand_name__in=', qValue:',Nothing'},]
    },
    {
        nameObj:'RAM',
        checkItem:[{nameobj:'1 GB and Below',idobj:'oneram',query:'&mobilePerformance__ram__in=', qValue:',1'},
        {nameobj:'2 GB',idobj:'tworam',query:'&mobilePerformance__ram__in=', qValue:',2'},
        {nameobj:'3 GB',idobj:'threeram',query:'&mobilePerformance__ram__in=', qValue:',3'},
        {nameobj:'4 GB',idobj:'fourram',query:'&mobilePerformance__ram__in=', qValue:',4'},
        {nameobj:'6 GB',idobj:'sixram',query:'&mobilePerformance__ram__in=', qValue:',6'},
        {nameobj:'8 GB',idobj:'eightram',query:'&mobilePerformance__ram__in=', qValue:',8'},
        {nameobj:'12 GB and Above',idobj:'twelveram',query:'&mobilePerformance__ram__in=', qValue:',12,13,14,15,16,17,18,19,20'},]
    },
    {
        nameObj:'INTERNAL STORAGE',
        checkItem:[{nameobj:'256 GB & Above',idobj:'256is',query:'&mobileStorage__device_storage__in=', qValue:',256,512,1024'},
        {nameobj:'128 - 255.9 GB',idobj:'255is',query:'&mobileStorage__device_storage__in=', qValue:',128'},
        {nameobj:'64 - 127.9 GB',idobj:'127is',query:'&mobileStorage__device_storage__in=', qValue:',64'},
        {nameobj:'32 - 63.9 GB',idobj:'36is',query:'&mobileStorage__device_storage__in=', qValue:',32,34,50'},
        {nameobj:'16 - 31.9 GB',idobj:'31is',query:'&mobileStorage__device_storage__in=', qValue:',16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31'},
        {nameobj:'8 - 15.9 GB',idobj:'15is',query:'&mobileStorage__device_storage__in=', qValue:',8,9,10,11,12,13,14,15'},
        {nameobj:'4 - 7.9 GB',idobj:'8is',query:'&mobileStorage__device_storage__in=', qValue:',4,5,6,7'},
        {nameobj:'2 - 3.9 GB',idobj:'4is',query:'&mobileStorage__device_storage__in=', qValue:',2,2.5,3'},
        {nameobj:'1 - 1.9 GB',idobj:'twois',query:'&mobileStorage__device_storage__in=', qValue:',1,1.5'},
        {nameobj:'Less than 1 GB',idobj:'oneis',query:'&mobileStorage__device_storage__in=', qValue:',.5'},]
    },
    {
        nameObj:'BATTERY CAPACITY',
        checkItem:[{nameobj:'6000 mAh & Above',idobj:'6000bt',query:'&mobileBattery__battery_capacity__in=', qValue:',6000'},
        {nameobj:'5000 - 5999 mAh',idobj:'5000bt',query:'&mobileBattery__battery_capacity__in=', qValue:',5100,5160,5200,5300,5400,5500,5600,5700,5800,5900'},
        {nameobj:'4000 - 4999 mAh',idobj:'4000bt',query:'&mobileBattery__battery_capacity__in=', qValue:',4000,4100,4200,4300,4400,4500,4660,4700,4800,4900'},
        {nameobj:'3000 - 3999 mAh',idobj:'3000bt',query:'&mobileBattery__battery_capacity__in=', qValue:',3000,3100,3200,3300,3400,3500,3600,3700,3800,3900'},
        {nameobj:'2000 - 2999 mAh',idobj:'2000bt',query:'&mobileBattery__battery_capacity__in=', qValue:',2000,2100,2200,2300,2400,2500,2600,2700,2800,2900'},
        {nameobj:'1000 - 1999 mAh',idobj:'1000bt',query:'&mobileBattery__battery_capacity__in=', qValue:',1000,1100,1200,1300,1400,1500,1600,1700,1800,1900'},
        {nameobj:'Less than 1000 mAh',idobj:'500bt',query:'&mobileBattery__battery_capacity__in=', qValue:','+Array.from({length: 999}, (x, i) => i)},]
    },
    {
        nameObj:'SCREEN SIZE',
        checkItem:[{nameobj:'Less than 3 inch',idobj:'1in',query:'&mobileDisplay__screen_size__in=', qValue:',2,2.2,2.4,2.6,2.8,3'},
        {nameobj:'3 - 3.4 inch',idobj:'2in',query:'&mobileDisplay__screen_size__in=', qValue:',3,3.1,3.2,3.3,3.4'},
        {nameobj:'3.5 - 3.9 inch',idobj:'3in',query:'&mobileDisplay__screen_size__in=', qValue:',3.5,3.6,3.7,3.8,3.9'},
        {nameobj:'4 - 4.4 inch',idobj:'4in',query:'&mobileDisplay__screen_size__in=', qValue:',4,4.1,4.2,4.3,4.4'},
        {nameobj:'4.5 - 4.9 inch',idobj:'5in',query:'&mobileDisplay__screen_size__in=', qValue:',4.5,4.6,4.7,4.8,4.9'},
        {nameobj:'5 - 5.1 inch',idobj:'6in',query:'&mobileDisplay__screen_size__in=', qValue:',5,5.1'},
        {nameobj:'5.2 - 5.4 inch',idobj:'7in',query:'&mobileDisplay__screen_size__in=', qValue:',5.2,5.3,5.4'},
        {nameobj:'5.5 - 5.6 inch',idobj:'8in',query:'&mobileDisplay__screen_size__in=', qValue:',5.5,5.6'},
        {nameobj:'5.7 - 5.9 inch',idobj:'9in',query:'&mobileDisplay__screen_size__in=', qValue:',5.7,5.8,5.9'},
        {nameobj:'6 - 6.3 inch',idobj:'10in',query:'&mobileDisplay__screen_size__in=', qValue:',6,6.1,6.2,6.3'},
        {nameobj:'6.4 inch & Above',idobj:'11in',query:'&mobileDisplay__screen_size__in=', qValue:',6.4,6.5,6.6,6.7,6.8,6.9,7'},]
    },
    {
        nameObj:'PRIMARY CAMERA',
        checkItem:[{nameobj:'Below 5 MP',idobj:'1pc',query:'&mobileCamera__primary_camera__in=', qValue:',3,3.5,4'},
        {nameobj:'5 - 7.9 MP',idobj:'2pc',query:'&mobileCamera__primary_camera__in=', qValue:',7,6,5'},
        {nameobj:'8 - 11.9 MP',idobj:'3pc',query:'&mobileCamera__primary_camera__in=', qValue:',11,10,9,8'},
        {nameobj:'12 - 15.9 MP',idobj:'4pc',query:'&mobileCamera__primary_camera__in=', qValue:',15,13,12'},
        {nameobj:'16 - 20.9 MP',idobj:'5pc',query:'&mobileCamera__primary_camera__in=', qValue:',20,18,16'},
        {nameobj:'21 - 31.9 MP',idobj:'6pc',query:'&mobileCamera__primary_camera__in=', qValue:',31,28,25,21'},
        {nameobj:'32 - 47.9 MP',idobj:'7pc',query:'&mobileCamera__primary_camera__in=', qValue:',47,35,32'},
        {nameobj:'48 - 63.9 MP',idobj:'8pc',query:'&mobileCamera__primary_camera__in=', qValue:',48,50'},
        {nameobj:'64 MP & Above',idobj:'9pc',query:'&mobileCamera__primary_camera__in=', qValue:',64,101'},]
    },
    {
        nameObj:'SECONDARY CAMERA',
        checkItem:[{nameobj:'Below 5 MP',idobj:'1sc',query:'&mobileCamera__secondary_camera__in=', qValue:',3,3.5,4,4.5'},
        {nameobj:'5 - 7.9 MP',idobj:'2sc',query:'&mobileCamera__secondary_camera__in=', qValue:',5,6,7'},
        {nameobj:'8 - 11.9 MP',idobj:'3sc',query:'&mobileCamera__secondary_camera__in=', qValue:',8,9,10,11'},
        {nameobj:'12 - 15.9 MP',idobj:'4sc',query:'&mobileCamera__secondary_camera__in=', qValue:',12,13,14,15'},
        {nameobj:'16 - 20.9 MP',idobj:'5sc',query:'&mobileCamera__secondary_camera__in=', qValue:',16,20'},
        {nameobj:'21 MP & Above',idobj:'6sc',query:'&mobileCamera__secondary_camera__in=', qValue:',32,21'},]
    },
    {
        nameObj:'PROCESSOR BRAND',
        checkItem:[{nameobj:'Qualcomm',idobj:'qualcomm',query:'&mobilePerformance__processor_company__in=', qValue:',Qualcomm'},
        {nameobj:'MediaTek',idobj:'mediatek',query:'&mobilePerformance__processor_company__in=', qValue:',MediaTek'},
        {nameobj:'Apple',idobj:'apple',query:'&mobilePerformance__processor_company__in=', qValue:',Apple'},
        {nameobj:'HiSilicon',idobj:'hisilicon',query:'&mobilePerformance__processor_company__in=', qValue:',HiSilicon'},
        {nameobj:'Samsung',idobj:'samsung',query:'&mobilePerformance__processor_company__in=', qValue:',Samsung'},
        {nameobj:'Google',idobj:'google',query:'&mobilePerformance__processor_company__in=', qValue:',Google'},]
    },
    {
        nameObj:'OPERATING SYSTEM',
        checkItem:[{nameobj:'ANDROID',idobj:'android',query:'&mobileGeneral__os__in=', qValue:',ANDROID'},
        {nameobj:'IOS',idobj:'ios',query:'&mobileGeneral__os__in=', qValue:',IOS'},]
    },
    {
        nameObj:'OPERATING SYSTEM VERSION NAME',
        checkItem:[{nameobj:'Pie',idobj:'pie',query:'&mobileGeneral__os_version__in=', qValue:',Pie'},
        {nameobj:'Android 10',idobj:'android10',query:'&mobileGeneral__os_version__in=', qValue:',Android 10'},
        {nameobj:'Android 11',idobj:'android11',query:'&mobileGeneral__os_version__in=', qValue:',Android 11'},
        {nameobj:'Android 12',idobj:'android12',query:'&mobileGeneral__os_version__in=', qValue:',Android 12'},]
    },
    {
        nameObj:'CLOCK SPEED',
        checkItem:[{nameobj:'Below 1.5 GHz',idobj:'1cs',query:'&mobilePerformance__clock_speed__in=', qValue:',1,1.2,1.3,1.4'},
        {nameobj:'1.5 - 1.9 GHz',idobj:'2cs',query:'&mobilePerformance__clock_speed__in=', qValue:',1.5,1.6,1.7,1.8,1.9'},
        {nameobj:'2 - 2.1 GHz',idobj:'3cs',query:'&mobilePerformance__clock_speed__in=', qValue:',2,2.1'},
        {nameobj:'2.2 - 2.4 GHz',idobj:'4cs',query:'&mobilePerformance__clock_speed__in=', qValue:',2.2,2.3,2.4'},
        {nameobj:'2.5 & Above',idobj:'5cs',query:'&mobilePerformance__clock_speed__in=', qValue:',2.5,2.6,2.7,2.8,2.9,3,3.1,3.2'},]
    },
]
}

