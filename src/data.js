import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Saut Ul Quran",
            artist: "news talk islamic",
            cover: "https://liveradios.in/wp-content/uploads/voice-of-islam.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "http://58.65.171.102:8004/stream?type=http&nocache=4",
            active: true,
        },
        {
            name:"Radio MQFM Bandung",
            artist: "islamic education entertainment",
            cover: "https://liveradios.in/wp-content/uploads/voice-of-islam.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "http://svara-stream.radioddns.net:8000/bandung_mqfm_mp3",
            active: false,
        },
        {
            name:"KSA Quran Makkah",
            artist: "islamic education entertainment",
            cover: "https://liveradios.in/wp-content/uploads/voice-of-islam.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "http://mediaserver2.islamicity.com:8000/SaudiTVArabic",
            active: false,
        },
        {
            name:"Quran Coran Station",
            artist: "islamic arabic",
            cover: "https://liveradios.in/wp-content/uploads/voice-of-islam.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "http://92.222.103.13:8005/;stream.nsv",
            active: false,
        },
        {
            name:"Radio Coran",
            artist: "islamic",
            cover: "https://liveradios.in/wp-content/uploads/voice-of-islam.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://webradio.tda.dz/Coran_64K.mp3",
            active: false,
        },
        {
            name:"Islamic Voice Radio",
            artist: "news talk folk islamic",
            cover: "https://liveradios.in/wp-content/uploads/voice-of-islam.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "http://streamer3.rightclickitservices.com:9755/;",
            active: false,
        },
        {
            name:"Radio Pendimi Live Kanali-1",
            artist: "talk islamic",
            cover: "https://liveradios.in/wp-content/uploads/voice-of-islam.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "http://85.93.88.146:8014/;",
            active: false,
        },
        {
            name:"Islamic Lectures Centre",
            artist: "Sleepy Fish",
            cover: "https://liveradios.in/wp-content/uploads/voice-of-islam.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://islamicl.radioca.st/;",
            active: false,
        },
        {
            name:"Radio Al-Bayane",
            artist: "talk islamic education",
            cover: "https://liveradios.in/wp-content/uploads/voice-of-islam.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://stream-30.zeno.fm/seb77kna90duv?zs=uMOk212nTUyUCgQ1-QKGWw",
            active: false,
        },
    ];
}

export default chillHop;


