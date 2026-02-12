const factsDB = {
    ru: [
        "Каспийское море — крупнейший на Земле замкнутый водоём.",
        "Пластиковая бутылка разлагается в природе до 450 лет.",
        "Одна пальма в Sea Breeze вырабатывает кислород для двух человек.",
        "Морские птицы часто путают пластик с едой, будь осторожен!",
        "Каспийская сосна выделяет фитонциды, убивающие бактерии.",
        "Азербайджан — уникальное место, где обитает каспийский тюлень.",
        "Алюминиевая банка будет разлагаться почти 100 лет.",
        "Каждый убранный пакет пластика спасает одну морскую жизнь.",
        "Энергия солнца в Баку — самый чистый источник силы.",
        "Окурки — самый частый вид мусора на мировых пляжах.",
        "Стеклянная бутылка может лежать в земле до 1000 лет.",
        "Деревья умеют общаться через грибницу в почве.",
        "Одна пальчиковая батарейка загрязняет 20 квадратных метров земли.",
        "Каспийская вода содержит много полезных минералов и солей.",
        "Тюлени — единственные млекопитающие Каспийского моря.",
        "Жвачка разлагается в природе около 50 лет.",
        "Переработка одной тонны бумаги спасает 17 деревьев.",
        "Морская трава вырабатывает больше кислорода, чем леса на суше.",
        "Вода в море соленая из-за вымывания минералов из камней.",
        "Мусор в море вредит не только рыбам, но и человеку.",
        "Каспий объединяет пять разных стран своим берегом.",
        "Сбор макулатуры помогает сохранить дома для птиц.",
        "Чистый пляж начинается с твоего первого шага.",
        "Эко-монеты — это твоя награда за защиту планеты.",
        "Солнечные батареи в Sea Breeze помогают экономить энергию.",
        "Морской воздух богат йодом, что полезно для здоровья.",
        "Если не мусорить, природа скажет тебе спасибо через сто лет.",
        "Микропластик настолько мал, что его почти невозможно увидеть.",
        "Обычный пакет используется 15 минут, а живет в море веками.",
        "Каждое посаженное дерево — это вклад в будущее Каспия.",
        "Медузы состоят из воды почти на 95 процентов.",
        "Ракушки на берегу — это бывшие дома морских жителей.",
        "Ветер в Sea Breeze можно использовать для получения энергии.",
        "Экология начинается с простой привычки убирать за собой.",
        "Защита моря — это забота о нашем общем доме.",
        "Береги воду: закрывай кран, когда чистишь зубы.",
        "Каспийский осётр — одна из древнейших рыб в мире.",
        "Природа Sea Breeze уникальна и требует защиты.",
        "Твоя фотография в ленте вдохновляет других на добрые дела.",
        "Вместе мы сделаем Каспий самым чистым морем!"
    ],
    az: [
        "Xəzər dənizi dünyanın ən böyük qapalı su hövzəsidir.",
        "Bir plastik şüşə təbiətdə 450 ilə qədər parçalanır.",
        "Sea Breeze-dəki bir xurma ağacı iki nəfərlik oksigen istehsal edir.",
        "Dəniz quşları çox vaxt plastiki yemlə səhv salırlar.",
        "Xəzər şamı bakteriyaları öldürən fitonsidlər ifraz edir.",
        "Azərbaycan Xəzər suitisinin yaşadığı unikal məkandır.",
        "Alüminium banka təbiətdə təxminən 100 il qalır.",
        "Hər yığılan plastik paket bir dəniz canlısını xilas edir.",
        "Bakının günəş enerjisi ən təmiz güc mənbəyidir.",
        "Siqaret kötükləri dünya çimərliklərində ən çox rast gəlinən zibildir.",
        "Şüşə qab torpaqda 1000 ilə qədər qala bilər.",
        "Ağaclar torpaqdakı göbələk şəbəkəsi vasitəsilə ünsiyyət qururlar.",
        "Bir batareya 20 kvadratmetr torpağı zəhərləyir.",
        "Xəzər suyu çoxlu faydalı minerallar və duzlarla zəngindir.",
        "Suitilər Xəzər dənizinin yeganə məməli heyvanlarıdır.",
        "Saqqız təbiətdə təxminən 50 il ərzində parçalanır.",
        "Bir ton kağızın təkrar emalı 17 ağacı xilas edir.",
        "Dəniz otları qurudakı meşələrdən daha çox oksigen istehsal edir.",
        "Dəniz suyu daşlardan yuyulan minerallara görə duzludur.",
        "Dənizdəki zibil yalnız balıqlara deyil, həm də insana zərər verir.",
        "Xəzər öz sahili ilə beş fərqli ölkəni birləşdirir.",
        "Kağız tullantılarının yığılması quşların yuvasını qoruyur.",
        "Təmiz çimərlik sənin ilk addımından başlayır.",
        "Eko-sikkələr planetin müdafiəsi üçün sənin mükafatındır.",
        "Sea Breeze-dəki günəş panelləri enerjiyə qənaət edir.",
        "Dəniz havası yodla zəngindir və sağlamlıq üçün xeyirlidir.",
        "Zibil atmamaqla təbiət sənə yüz il sonra təşəkkür edəcək.",
        "Mikroplastik o qədər kiçikdir ki, onu görmək demək olar mümkün deyil.",
        "Adi paket 15 dəqiqə istifadə olunur, dənizdə isə əsrlərlə qalır.",
        "Hər əkilən ağac Xəzərin gələcəyinə bir töhfədir.",
        "Meduza orqanizminin 95 faizi sudan ibarətdir.",
        "Sahildəki balıqqulağılar dəniz sakinlərinin keçmiş evləridir.",
        "Sea Breeze küləyindən enerji almaq üçün istifadə etmək olar.",
        "Ekologiya özündən sonra təmizləmək vərdişindən başlayır.",
        "Dənizi qorumaq bizim ortaq evimizi qorumaqdır.",
        "Suya qənaət et: dişlərini fırçalayanda kranı bağla.",
        "Xəzər nərəsi dünyanın ən qədim balıqlarından biridir.",
        "Sea Breeze təbiəti unikaldir və müdafiə tələb edir.",
        "Sənin şəklin başqalarını yaxşı işlərə ruhlandırır.",
        "Birlikdə Xəzəri ən təmiz dəniz edəcəyik!"
    ],
    en: [
        "The Caspian Sea is the world's largest enclosed body of water.",
        "A plastic bottle takes up to 450 years to decompose.",
        "One palm tree in Sea Breeze produces oxygen for two people.",
        "Sea birds often mistake plastic for food, please be careful!",
        "The Caspian pine releases phytoncides that kill bacteria.",
        "Azerbaijan is a unique home for the Caspian seal.",
        "An aluminum can will stay in nature for nearly 100 years.",
        "Every bag of plastic collected saves one marine life.",
        "Solar energy in Baku is the cleanest source of power.",
        "Cigarette butts are the most common litter on world beaches.",
        "A glass bottle can stay in the ground for up to 1000 years.",
        "Trees communicate through fungal networks in the soil.",
        "One finger battery pollutes 20 square meters of land.",
        "Caspian water is rich in many beneficial minerals and salts.",
        "Seals are the only mammals in the Caspian Sea.",
        "Chewing gum takes about 50 years to decompose in nature.",
        "Recycling one ton of paper saves 17 trees.",
        "Sea grass produces more oxygen than forests on land.",
        "Sea water is salty because of minerals washed from rocks.",
        "Litter in the sea harms both fish and humans.",
        "The Caspian connects five different countries with its shore.",
        "Collecting waste paper helps save homes for birds.",
        "A clean beach starts with your first step.",
        "Eco-coins are your reward for protecting the planet.",
        "Solar panels in Sea Breeze help save energy.",
        "Sea air is rich in iodine, which is good for health.",
        "If you don't litter, nature will thank you in a hundred years.",
        "Microplastic is so small that it is almost impossible to see.",
        "A regular bag is used for 15 minutes but lives in the sea for centuries.",
        "Every tree planted is a contribution to the Caspian's future.",
        "Jellyfish consist of almost 95 percent water.",
        "Shells on the shore are the former homes of sea creatures.",
        "Wind in Sea Breeze can be used to generate energy.",
        "Ecology starts with a simple habit of cleaning up after yourself.",
        "Protecting the sea is caring for our common home.",
        "Save water: turn off the tap when brushing your teeth.",
        "The Caspian sturgeon is one of the oldest fish in the world.",
        "The nature of Sea Breeze is unique and requires protection.",
        "Your photo in the feed inspires others to do good deeds.",
        "Together we will make the Caspian the cleanest sea!"
    ]
};

const translations = {
    ru: { welcome: "Привет, Герой!", "hero-text": "Экспедиция начинается.", "t-light": "Фонарик", "t-uv": "УФ-Свет", "t-audio": "Аудиогид", "feed-title": "Лента", "about-title": "О проекте", "about-text": "Эко-платформа для Sea Breeze." },
    az: { welcome: "Salam, Qəhrəman!", "hero-text": "Ekspedisiya burada başlayır.", "t-light": "Fənər", "t-uv": "UB-İşıq", "t-audio": "Səsli bələdçi", "feed-title": "Xəbərlər", "about-title": "Layihə haqqında", "about-text": "Sea Breeze üçün eko platforma." },
    en: { welcome: "Hello, Hero!", "hero-text": "Expedition starts here.", "t-light": "Flashlight", "t-uv": "UV-Light", "t-audio": "Audio Guide", "feed-title": "Feed", "about-title": "About", "about-text": "Eco-platform for Sea Breeze." }
};

let currentLang = 'ru';
let stream = null;

function changeLang() {
    currentLang = document.getElementById('lang-select').value;
    document.querySelectorAll('[data-key]').forEach(el => {
        el.innerText = translations[currentLang][el.getAttribute('data-key')];
    });
}

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    const activeTab = Array.from(document.querySelectorAll('.tab-item')).find(t => t.innerHTML.includes(getIcon(id)));
    if(activeTab) activeTab.classList.add('active');
    
    if (id === 'camera') startCamera(); else stopCamera();
    initData();
}

function getIcon(id) {
    if(id==='home') return 'home';
    if(id==='tools') return 'toolbox';
    if(id==='camera') return 'camera';
    if(id==='feed') return 'images';
    if(id==='about') return 'info-circle';
}

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        document.getElementById('video').srcObject = stream;
    } catch(e) { alert("Camera error"); }
}

function stopCamera() {
    if(stream) stream.getTracks().forEach(t => t.stop());
}

async function takePhoto() {
    const v = document.getElementById('video');
    const canvas = document.createElement('canvas');
    canvas.width = v.videoWidth; canvas.height = v.videoHeight;
    canvas.getContext('2d').drawImage(v, 0, 0);
    const img = canvas.toDataURL('image/jpeg', 0.6);
    await fetch('/api/upload', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ image: img, lang: currentLang })
    });
    alert('OK! +50 🪙');
    showPage('feed');
}

async function toggleFlash() {
    const track = stream?.getVideoTracks()[0];
    if (track) {
        try {
            const isOn = track.getSettings().torch;
            await track.applyConstraints({ advanced: [{ torch: !isOn }] });
        } catch(e) { alert("Flash not supported"); }
    } else { alert("Enable camera for flash"); }
}

function toggleUV() {
    const f = document.getElementById('uv-filter');
    f.style.display = f.style.display === 'block' ? 'none' : 'block';
}

function playAudio() {
    const list = factsDB[currentLang];
    const text = list[Math.floor(Math.random() * list.length)];
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = currentLang === 'az' ? 'tr-TR' : (currentLang === 'en' ? 'en-US' : 'ru-RU');
    window.speechSynthesis.speak(msg);
}

window.addEventListener('deviceorientationabsolute', (e) => {
    const head = e.alpha || e.webkitCompassHeading;
    if(head) {
        document.getElementById('comp-arrow').style.transform = `rotate(${-head}deg)`;
        document.getElementById('comp-deg').innerText = Math.round(head) + '°';
    }
});

async function initData() {
    const res = await fetch('/api/data');
    const data = await res.json();
    document.getElementById('balance-val').innerText = data.balance;
    document.getElementById('feed-list').innerHTML = data.posts.map(p => `
        <div class="post-card"><img src="${p.image}"><div style="padding:10px"><b>${p.user}</b> • ${p.time}</div></div>
    `).join('');
}

initData();
