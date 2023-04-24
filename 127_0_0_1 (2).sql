-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2023 at 03:56 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digikala_laravel_react`
--
CREATE DATABASE IF NOT EXISTS `digikala_laravel_react` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `digikala_laravel_react`;

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subject` varchar(80) NOT NULL,
  `Introduction` varchar(500) NOT NULL,
  `about1` varchar(1500) NOT NULL,
  `about2` varchar(1500) DEFAULT NULL,
  `about3` varchar(1500) DEFAULT NULL,
  `about4` varchar(1500) DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `file` varchar(200) NOT NULL,
  `logo` varchar(200) NOT NULL,
  `special` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `subject`, `Introduction`, `about1`, `about2`, `about3`, `about4`, `product_id`, `file`, `logo`, `special`, `created_at`, `updated_at`) VALUES
(1, '۱۴ لوازم بهداشتی خوب و کارآمد برای مراقبت از کودک', 'اگر قدم در دنیای فوق‌العاده‌ و جذاب مادری گذاشته‌اید و نگران سلامتی و وضعیت بهداشت کودک خود هستید حتما تا آخر این مطلب همراه‌مان باشید چرا که قصد داریم به صورت کامل و جامع به معرفی لوازم بهداشت و حمام کودک بپردازیم.', 'برای یک نوزاد تازه متولد شده و یا یک خردسال، کوچک‌ترین میکروب و آلودگی کافی است تا به سختی بیمار شود؛ متأسفانه کودکان توانایی مراقبت از خودشان را ندارند و این وظیفه‌ی والدین است که تا جای ممکن از آن‌ها مراقبت کنند. از همین رو اگر نمی‌خواهید در همان دوران نوزادی، کودک شما با بیماری‌های مختلف دست و پنجه نرم کند، باید بدانید مراقبت‌های بهداشتی او و همچنین تمیزی و رعایت بهداشت خانه‌ای که در آن زندگی می‌کنید اهمیت بسیار زیادی دارد. همچنین نظافت دهان، بینی، پوست، مو و ناخن کودکان اولین راه‌ پیشگیری از بروز مشکلات و عفونت‌ها در آن‌هاست.', 'برای پیشگیری از بیماری کودکان و مراقبت‌های بهداشتی راه‌های بسیار زیادی وجود دارد که می‌توانید به سادگی و در منزل آن‌ها را به کار بگیرید. همانند حمام کردن و رعایت بهداشت کودک، استفاده از لوازم شوینده‌ی مخصوص، استفاده از لوازم بهداشتی و مراقبتی همانند تب‌سنج و مواردی از این قبیل.', 'البته باید به خاطر داشته باشید که تنها رعایت بهداشت فردی کودک و یا مرتبا حمام کردن او کافی نیست و برای اینکه بیشتر از کودک دلبندتان مراقبت کنید، بهتر است در درجه‌ی اول خودتان هم نکاتی را رعایت کنید. همانند شستن دست‌هایتان، شستن کف‌پوش خانه و کشیدن جاروبرقی.', 'یکی از اولین اقدام‌های مراقبتی از بهداشت و سلامت کودک علاوه بر حمام کردن این است که هر دو والد قبل از به آغوش کشیدن یا نوازش کودک خوب دست‌های خود را بشویند. همچنین اگر می‌خواهید پوشک نوزاد را هم عوض کنید به یاد داشته باشید که ابتدا باید خوب دستان خود را با صابون یا مایع شوینده بشویید.', 17, 'home/article/eMqbQdjUvePX1gkKePkdlZpE4HD8TrNhO2m8L70C.jpg', 'home/article/HlVrQVYo7zp6w5KOu6TG9kimso4AXwcXNZc8ohY2.jpg', 1, '2023-01-26 09:47:18', '2023-02-06 12:30:31'),
(2, 'راهنمای خرید پاوربانک؛ بهمن ۱۴۰۱', 'پاوربانک یا شارژرهای همراه به یکی از اصلی‌ترین گجت‌های این روزها تبدیل شده است. اگر شما هم قصد خرید بهترین پاوربانک را دارید، ما در این مطلب راهنمای خرید پاوربانک دیجی‌کالا مگ تعدادی از بهترین شارژرهای همراه بازار را به شما معرفی کرده‌ایم.', 'برای یک نوزاد تازه متولد شده و یا یک خردسال، کوچک‌ترین میکروب و آلودگی کافی است تا به سختی بیمار شود؛ متأسفانه کودکان توانایی مراقبت از خودشان را ندارند و این وظیفه‌ی والدین است که تا جای ممکن از آن‌ها مراقبت کنند. از همین رو اگر نمی‌خواهید در همان دوران نوزادی، کودک شما با بیماری‌های مختلف دست و پنجه نرم کند، باید بدانید مراقبت‌های بهداشتی او و همچنین تمیزی و رعایت بهداشت خانه‌ای که در آن زندگی می‌کنید اهمیت بسیار زیادی دارد. همچنین نظافت دهان، بینی، پوست، مو و ناخن کودکان اولین راه‌ پیشگیری از بروز مشکلات و عفونت‌ها در آن‌هاست.', 'برای پیشگیری از بیماری کودکان و مراقبت‌های بهداشتی راه‌های بسیار زیادی وجود دارد که می‌توانید به سادگی و در منزل آن‌ها را به کار بگیرید. همانند حمام کردن و رعایت بهداشت کودک، استفاده از لوازم شوینده‌ی مخصوص، استفاده از لوازم بهداشتی و مراقبتی همانند تب‌سنج و مواردی از این قبیل.', 'برای پیشگیری از بیماری کودکان و مراقبت‌های بهداشتی راه‌های بسیار زیادی وجود دارد که می‌توانید به سادگی و در منزل آن‌ها را به کار بگیرید. همانند حمام کردن و رعایت بهداشت کودک، استفاده از لوازم شوینده‌ی مخصوص، استفاده از لوازم بهداشتی و مراقبتی همانند تب‌سنج و مواردی از این قبیل.', NULL, 15, 'home/article/JKJ9Wacev0cCDEXaiiUZJieoFlWIQl2vBP0N5zpk.jpg', 'home/article/T50Pi2E0THb1qtIJu1PKVIob3ODmPVPdqpSreZOL.jpg', 1, '2023-01-26 09:51:05', '2023-02-06 12:30:31'),
(3, 'چگونه یک خنک‌کننده آبی مناسب برای CPU انتخاب کنیم؟', 'اگر به دنبال یک خنک‌کننده آبی برای CPU کامپیوتر خود هستید، باید به نکات زیادی توجه کنید. در این مطلب به طور مختصر و مفید به چند نکته که برای خرید خنک‌کننده‌های آبی باید توجه کنید، می‌پردازیم. باید خاطرنشان کنیم منظور ما از خنک‌کننده آبی، مدل‌های مدار بسته است که رایج‌ترین مدل این خنک‌کننده‌ها محسوب می‌شوند. زیرا همانطور که احتمالا می‌دانید، برخی کاربران از مدل‌های مدار باز هم استفاده می‌کنند که البته استفاده از آن‌ها پیچیده‌تر است و هزینه‌ی بیشتری در پی دارد.', 'این نوع دستگاه‌ها مبتنی بر یک محلول مایع هستند که بین رادیاتور فلزی که توسط فن‌ها خنک می‌شود و یک بلوک خنک‌کننده که در بالای پردازنده قرار می‌گیرد، به گردش درمی‌آید. با این کار دمای پردازنده با سرعت و به طور بهینه‌ای کاهش پیدا می‌کند. برخلاف خنک‌کننده بادی که از هوا برای خروج گرما از پردازنده استفاده می‌کند، خنک‌کننده مایع با گردش مداوم مایع خنک از طریق بلوک خنک‌کننده که روی پردازنده قرار دارد، گرما را از پردازنده خارج می‌کند.', 'سپس از بلوک خنک‌کننده، مایع موردنظر به رادیاتور راه پیدا می‌کند که این رادیاتور در بخش فوقانی، پشتی یا پایینی کیس قرار دارد و در نهایت گرمای موردنظر با کمک فن‌ها دفع می‌شود. بعد از این کار، مایع بار دیگر به بلوک خنک‌کننده برمی‌گردد و همین فرایند به دفعات تکرار می‌شود. اما اگر به دنبال خرید یک خنک‌کننده آبی هستید، بهتر است به این نکات که در ادامه آن‌ها را مطرح می‌کنیم، توجه کنید.', 'همانطور که گفتیم، تمام خنک‌کننده‌های آبی برای دفع گرما از رادیاتور بهره می‌برند. نحوه‌ی عملکرد آن هم مشابه رادیاتور ماشین است. اما قبل از خرید و نصب خنک‌کننده، باید به اندازه‌ی رادیاتور و ویژگی‌های آن توجه نشان دهید. زیرا اندازه‌ی رادیاتور یک خنک‌کننده آبی ارتباط مستقیمی با اندازه‌ی کیس کامپیوتر شما دارد.', 'رادیاتورهای موجود در خنک‌کننده‌های آبی معمولا در سه اندازه‌ی مبتنی بر یک، دو و سه فن به فروش می‌رسند. همچنین ممکن است این موارد به عنوان رادیاتورهای ۱۲۰ میلی‌متری، ۲۴۰ میلی‌متری و ۳۶۰ میلی‌متری به فروش برسند. برخی از آن‌ها اندکی عریض‌تر هستند و مثلا ممکن است از فن‌های ۱۴۰ میلی‌متری به جای فن‌های ۱۲۰ میلی‌متری استفاده کنند. همچنین باید به مدل‌های ۲۸۰ میلی‌متری و ۴۲۰ میلی‌متری هم اشاره کنیم. در این میان تعداد اندکی خنک‌کننده آبی مجهز به ۴ فن هم به فروش می‌رسند که تعداد آن‌ها بسیار پایین است و در حقیقت فقط افراد انگشت‌شماری به این نوع خنک‌کننده‌ها نیاز پیدا می‌کنند.', 14, 'home/article/bDe4a4mdR7I8JxBa58NiFh3CxpLNw9HzzWFSEyqe.jpg', 'home/article/bR2uRIfI4A15LlbUw67WJdHYeoPyWr8flKdktpBD.jpg', 0, '2023-01-26 09:52:17', '2023-02-06 12:30:31'),
(5, 'نقد و بررسی MacBook Pro M1؛ هم‌تراز با مدل ایر اما بهینه‌ یافته‌تر', 'لپتاپ MacBook Pro M1 یکی دیگر از محصولات الکترونیکی شرکت اپل محسوب می‌شود که در حال حاضر به دلیل روی کار آمدن محصولات با معماری پردازنده‌ی M2، تب و تاب خریدش اندکی کاهش یافته است. با این اوصاف، این محصول نقاط قوت متعدد و جذابی دارد که در این بررسی به آن موارد و همچنین نقاط منفی می‌پردازیم.', 'شرکت اپل در نوامبر سال ۲۰۲۰ میلادی، اولین پردازنده‌ها با معماری M1 را به‌واسطه‌ی توسعه‌ی سه مدل محصول مک‌بوک پرو، مک‌بوک ایر و مک‌ مینی عرضه کرد. در اوایل سال ۲۰۲۱ بود که اپل دو مدل M1 iMac و M1 iPad Pro را هم به لیست خط تولید محصولات با پردازنده‌ی M1 اضافه می‌کند. پردازنده‌ی M1 در آن دوران مورد استقبال بسیاری از منتقدین و کارشناس‌های حوزه‌ی سخت افزار قرار گرفت؛ چراکه این پردازنده‌های نسل جدید شرکت اپل، هم عملکرد بی‌نظیر و هم راندمان بسیار خوبی را در محصولات اپل به دنبال داشت. این دستاوردها، همگی به دلیل کار و زحمت بسیار زیاد کارشناس‌های خبره‌ی شرکت اپل در طول سال‌ها طراحی و توسعه‌ی آیفون و آی‌پد به دست آمد.', NULL, NULL, NULL, 4, 'home/article/4CLIFVhs3TU3uBIvS0g488pnYKt48I8MqUQ7fdca.jpg', 'home/article/W3mrHXWbayQUL8Sze7ic8GreikSFghGL36aV4Jli.jpg', 1, '2023-02-06 12:02:57', '2023-02-06 12:30:31'),
(6, 'سری گلکسی S23 از قابلیت آپدیت بی‌وقفه پشتیبانی نمی‌کند', 'به گزارش وب‌سایت SamMobile، قابلیت آپدیت بی‌وقفه که یکی از بهترین قابلیت‌های سیستم‌عامل اندروید به حساب می‌آید در سری گلکسی S23 در دسترس قرار دارند.', 'آپدیت بدون وقفه یکی از قابلیت‌های بسیار مفید اندروید به حساب می‌آید که به کاربران اجازه می‌دهد بدون اینکه نیاز باشد تمام فعالیت‌ها را روی گوشی متوقف کنند، آپدیت را روی گوشی دریافت و نصب کنند. اگرچه این قابلیت بسیار ضروری است اما شرکت‌های بزرگی مثل سامسونگ از آن پشتیبانی نمی‌کنند. همچنین این قابلیت به کاربران این اجازه را می‌دهد تا به شرایط پایدار سابق بازگردند چرا که آپدیت روی یک دیسک جدا نصب می‌شود.', 'از زمانی که خبرهایی پیرامون سری گلکسی S23 شکل گرفت تا قبل از رونمایی آن‌ها، همچنان انتظار می‌رفت سامسونگ قابلیت آپدیت بی‌وقفه را به گوشی‌های پرچم‌دار مورد انتظار خود اضافه کند که اکنون و با رونمایی رسمی از این گوشی‌ها می‌بینیم که چنین اتفاقی نیفتاده است. این در حالی است که گفته می‌شد در اندروید ۱۳، گوشی‌های سامسونگ به اجبار این قابلیت را دریافت خواهند کرد. حالا اما به نظر می‌رسد این شرکت کره‌ای قصد دارد با رابط کاربری One UI 6.0 قابلیت آپدیت بی‌وقفه را به گلکسی S23 و سایر گوشی‌های خود اضافه کند. این رابط کاربری هم در زمانی نامشخص در سال جاری برای گوشی‌های سامسونگ عرضه خواهد شد.', 'یکی از دلایلی که باعث شده سامسونگ خیلی به عرضه‌ی قابلیت آپدیت بی‌وقفه برای گوشی‌هایش تمایل نشان ندهد، نگرانی از بابت حافظه‌ی داخلی بوده است. یکی از ضعف‌های این قابلیت کاربردی دقیقا این است که حافظه‌ی داخلی را به شدت اشغال می‌کند و از این حیث برای هر گوشی که حافظه‌ی داخلی محدودی دارد اصلا گزینه‌ی مناسبی محسوب نمی‌شود.', 'اما این موضوع برای گوشی‌های پرچم‌داری که غالبا حداقل ۲۵۶ گیگابایت حافظه‌ی داخلی دارند نباید مشکل‌ساز باشد. البته سامسونگ می‌تواند حجم اپلیکیشن‌های نصب شده روی گوشی را هم کمتر کند چرا که آن‌ها چیزی حدود ۵۰ گیگابایت از حجم گوشی را بدون نصب هیچ اپ دیگری اشغال می‌کنند. البته این ۵۰ گیگابایت برای S23 اولترا است چون حجم اپ‌های سیستمی در گلکسی S22 اولترا چیزی در حدود ۳۰ گیگابایت بود.', 12, 'home/article/v3KzaMN2HQDx7GZ0gniDyj3OaEIuDFsc7GoDWCSw.jpg', 'home/article/yK17UjQvo7ZUAhBOiTV4bEe4uIGEorDBsflB2OaY.jpg', 1, '2023-02-06 12:10:03', '2023-02-06 12:30:31'),
(7, 'نکات مهم قبل از فروش گوشی دست دوم که باید بدانید', 'قصد فروش گوشی دست دوم خود را دارید اما نمی‌دانید باید چگونه این کار را انجام دهید؟ پیشنهاد می‌کنیم این مطلب را از دست ندهید چرا که در آن به بررسی نکاتی می‌پردازیم که قطعا برای فروش گوشی دست دوم مفید خواهند بود.', 'این روزها گوشی‌های هوشمند بسیار قدرتمندتر از گذشته شده‌اند و در نتیجه وقتی کاربری آن را خریداری می‌کند، دیرتر به یک گوشی جدید نیاز پیدا می‌کند. اما اگر این احساس نیاز به وجود بیاید، چند راه وجود دارد که بتوان از گوشی قدیمی هم استفاده‌ای برد. نخست اینکه آن را به یکی از اعضای خانواده داد که تاکنون گوشی هوشمند نداشته است یا حداقل این گوشی از آنچه که او استفاده می‌کرده بهتر است؛ دوم اینکه گوشی را به عنوان گوشی دوم در کنار خودمان نگه داریم و از آن استفاده کنیم و سوم اینکه آن را به عنوان یک گوشی دست دوم بفروشیم.', 'توجه داشته باشید گوشی‌های امروزی واقعاً خوب هستند و قطعا بعد از گذشت مدتی، باز هم آن کارایی و کیفیت لازم را دارند. بنابراین هنگام خرید یک گوشی جدید، حتما به خاطر داشته باشید که گوشی قدیمی شما هم می‌تواند کارایی زیادی داشته باشد. اگر می‌خواهید از گوشی استفاده کنید، حرف زیادی باقی نمی‌ماند، اما اگر می‌خواهید گوشی را به عنوان یک محصول دست دوم بفروشید، چندین نکته وجود دارد که حتما باید آن‌ها را مد نظر داشته باشید تا بتوانید با خیال راحت این کار را انجام دهید.', NULL, NULL, 20, 'home/article/cj7PVG9THOT1uiyCGYiem8pwSNZoGfGJZXaowZoN.jpg', 'home/article/06HGA17IxPhOA63alUWfx5AgaVO9AgXq8KnEhr3O.jpg', 0, '2023-02-06 12:11:39', '2023-02-06 12:30:31'),
(9, 'مشکل دانلود از گوگل پلی استور و ۱۵ روش برای حل آن', 'اگر شما هم تاکنون حین دانلود از گوگل پلی با پیغام‌ خطا و یا مشکلاتی دیگر از قبیل Wait­ing for Down­load مواجه شده‌اید، نگران نباشید. در این مطلب به بررسی مهم‌ترین مشکل دانلود از گوگل پلی استور پرداخته و روش‌هایی برای حل آن را به شما عزیزان پیشنهاد می‌دهیم.', 'معمولا برای دانلود برنامه‌های اندرویدی، گوگل پلی اولین و بهترین انتخاب کاربران است. به عبارتی باید گفت درست‌ترین انتخاب هم همین فروشگاه خواهد بود چون نه تنها غنی از تمام برنامه‌های مورد نیاز کاربران است بلکه از نظر امنیتی نیز خطری گوشی را تهدید نمی‌کند.', 'اما گاهی اوقات کاربران با مشکل دانلود نشدن از گوگل پلی مواجه می‌شوند که یکی از بارزترین نمونه‌هایش، ماندن روی صفحه دانلود است. مثلا پیغام Waiting for Download را مشاهده می‌کنید اما اگر آن را به حال خود راه کنید هیچوقت برنامه را برایتان دانلود و نصب نمی‌کند. در این مطلب به معرفی راه حل‌هایی برای این مشکل دانلود از گوگل پلی استور می‌پردازیم که امیدواریم برای شما عزیزان مفید واقع شود.', 'اما قبل از پرداختن به معرفی روش‌ها و بررسی علت دانلود نکردن گوگل پلی، ذکر یک مشکل و راه حل آن ضروری است. کاربرانی با IP ایران نمی‌توانند یک سری برنامه‌ها را از پلی استور دریافت کنند چون معمولا با پیغام آزار دهنده «این مورد در کشور شما در دسترس نیست» مواجه می‌شوند. حتی گاهی اوقات اگر پلی استور را باز کرده و کلمه player را جست‌ و جو کنید، برای مثال ۱۰ مورد برایتان به نمایش در خواهد آمد اما بعد از انجام مراحلی که در زیر به شما آموزش خواهیم داد، این تعداد بیشتر خواهد شد و می‌توانید بدین ترتیب به برنامه اصلی و یا به همان برنامه‌ای که در کشور ما در دسترس نبود دسترسی داشته باشید. (روش شماره یک، پیشنهاد شخصی است).', NULL, 2, 'home/article/AqrqikgFGwzWqkeOlFUolc3vnuVBPCTPrd14KdAK.jpg', 'home/article/p8XINq10CJmiYQ9Av0el3mHf1FB095Ynay0ucKKj.jpg', 0, '2023-02-06 12:18:43', '2023-02-06 12:18:43');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `national` varchar(255) NOT NULL,
  `special` int(11) NOT NULL DEFAULT 0,
  `about` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `logo`, `national`, `special`, `about`, `created_at`, `updated_at`) VALUES
(1, 'پریل', 'variations/brands/cNutqgga0R1XifeFPc7AbsU2mEnRGatJo87I7UTY.png', 'ایران', 1, '1', '2023-01-22 16:56:25', '2023-02-13 15:29:15'),
(2, 'پرسیل', 'variations/brands/KBZ7IuQU85GhBaQUNH4lcSH9NFasPPVz2U1HIseg.png', 'ایران', 1, '2', '2023-01-22 16:56:45', '2023-02-13 15:29:15'),
(3, 'چشمه نور', 'variations/brands/cNoX2StZC0klDr7sjSzJapcz72j516x1ro8EroDa.jpg', 'ایران', 1, '3', '2023-01-22 16:56:58', '2023-02-13 15:29:15'),
(4, 'اکتیو', 'variations/brands/YsGj4v68WeypIW7h5oGKHKicjh8PFvnmlKh4dgCV.jpg', 'ایران', 1, '4', '2023-01-22 16:57:09', '2023-02-13 15:29:16'),
(5, 'کاله', 'variations/brands/oqgzveFlHk6omo2gAaizml1WrOo5uZmirRkcgKdf.png', 'ایران', 1, '5', '2023-01-22 16:57:22', '2023-02-13 15:29:16'),
(6, 'شیاومی', 'variations/brands/N5DnsGgvVC4F5B3O0qQT9RGs4law839X80Tl8s2p.png', 'چین', 1, '6', '2023-01-22 16:57:45', '2023-02-13 15:29:16'),
(7, 'سامسونگ', 'variations/brands/CpLxuO235ALIfZy4F5h8xkHZcDyEgBCVzKUlF3xo.jpg', 'آلمان', 1, '7', '2023-01-22 16:58:28', '2023-02-13 15:29:16'),
(8, 'کینگ استار', 'variations/brands/eNbpm4JXKYEbOPUX3HGmSMhQkDSb9eytjZ0wgDhd.png', 'فرانسه', 1, '8', '2023-01-22 16:58:51', '2023-02-13 15:29:16'),
(9, 'پاکشوما', 'variations/brands/Skz2MbYHs4pNlf8Os8kn8g6eV3GQpdFYqYrPZYxg.png', 'ایران', 1, '9', '2023-01-22 16:59:13', '2023-02-13 15:29:16'),
(10, 'هوآوی', 'variations/brands/VPECDfrblPuYIyX6WUIXpuwXm7NZWiCSItIrKkyv.png', 'چین', 1, '10', '2023-01-22 16:59:38', '2023-02-13 15:29:16'),
(11, 'متفرقه', 'variations/brands/mIwkurfdXkoVqscDRC94vUzwN0hYasttWmEngv3W.jpg', 'ایران', 0, '11', '2023-01-22 17:11:11', '2023-02-13 15:29:16'),
(12, 'اپل', 'variations/brands/L6oObDiWLEzbOTVuEnrqiObjm4EGD45IE9fYmwi2.png', 'امریکا', 1, 'عالیه', '2023-02-08 13:25:34', '2023-02-13 15:29:16'),
(13, 'LG', 'variations/brands/TRfKJ7GtOx1O8mdw7DlOUOxan19UdsHSOTaSteQR.jpg', 'انگلیس', 1, 'خیلی برند خوبیه', '2023-02-13 13:26:05', '2023-02-13 15:29:16');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `parent_id` bigint(20) UNSIGNED NOT NULL,
  `level` bigint(20) UNSIGNED NOT NULL,
  `logo` varchar(500) NOT NULL,
  `image` varchar(500) NOT NULL,
  `special` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `parent_id`, `level`, `logo`, `image`, `special`, `created_at`, `updated_at`) VALUES
(1, 'کالای دیجیتال', 0, 1, 'categories/85dLpwSNw4B90TdgguAQv4ZaqhqnuLAhrV4HKZgE.svg', 'categories/1arCldtbEZFPgSWfkrRGgSnCntQ4HYfUd0pnbB4a.png', 0, '2023-01-22 16:29:57', '2023-01-22 16:29:57'),
(2, 'خودرو، ابزار و تجهیزات صنعتی', 0, 1, 'categories/TexsswmKhv7YaV7cLcoZchjoXOtL1pCr1nra7rND.svg', 'categories/64pUum6ZbbYxi5yaS9SnWmilkI0ZP1cq1mdVd79U.png', 0, '2023-01-22 16:30:21', '2023-01-22 16:30:21'),
(3, 'مد و پوشاک', 0, 1, 'categories/AySAU3p21k4PSUz9b0XLv3yOxGr104tNOEeXRQ9d.svg', 'categories/4GMU2vRy35tyg3VU3qS9w1EPDFBEu36XogSQvRt3.png', 0, '2023-01-22 16:30:52', '2023-01-22 16:30:52'),
(4, 'کالاهای سوپرمارکتی', 0, 1, 'categories/437zVgsVFGVpp3lLWqfHX7rQGKifmTjif2YjRfEn.svg', 'categories/8fTwT3gzqZNPYTXUJEYrBdhNeLqjU98OLXNfwBHB.png', 0, '2023-01-22 16:31:22', '2023-01-22 16:31:22'),
(5, 'محصولات بومی و محلی', 0, 1, 'categories/ZQpsJzVjyOvCFo4PFuRDmtAUxiVtxxjHQjJf4Pfu.svg', 'categories/mZ1Zcoh3kDLPU9LojDGnRioCwzvhBFQnZZNjym5e.png', 0, '2023-01-22 16:31:43', '2023-01-22 16:31:43'),
(6, 'اسباب بازی، کودک و نوزاد', 0, 1, 'categories/oZYIg4ADd6mJr8c1RzVMPg6iBQ54xEv05gY0se0e.svg', 'categories/JTKUjdi8aKaoqChrMwA7WELgx6QAuOjjuZOmq97J.png', 0, '2023-01-22 16:32:02', '2023-01-22 16:32:02'),
(7, 'زیبایی و سلامت', 0, 1, 'categories/KJQnE6FceSr8e8N7jR9gddbhVU0rxSyFnOQ5LA53.svg', 'categories/Lthm2OE4Pmcio3lZHhRjfl0KQitMK4I1m2BDoM3t.png', 0, '2023-01-22 16:32:25', '2023-01-22 16:32:25'),
(8, 'خانه و آشپزخانه', 0, 1, 'categories/BuSSb84k0acIvGPGc9AaPXfqHQASEg63j6d178gx.svg', 'categories/9q1vCPupwQ40vWnms0aViKIOBzyfSvURCDIgZXLl.png', 0, '2023-01-22 16:32:53', '2023-01-22 16:32:53'),
(9, 'کتاب، لوازم تحریر و هنر', 0, 1, 'categories/XbyE8uPSz8d5deezWLBQwiUHgein8OZqJxVICstQ.svg', 'categories/S5hQhhdJb9H1mWKRKUGskp1oAnaFWTTIKPLVYg5c.png', 0, '2023-01-22 16:33:15', '2023-01-22 16:33:15'),
(10, 'ورزش و سفر', 0, 1, 'categories/1a1MeGq90KaUCSlxsBusRwZpmCxODwKDGzxWdKjf.svg', 'categories/ew1NuiNefwW2gkxQK6pqId5Pur2vskF5rRc0ivRe.png', 0, '2023-01-22 16:33:34', '2023-01-22 16:33:34'),
(11, 'گوشی موبایل', 1, 2, '0', 'categories/EqoTJ0hWdn1Oy7HSo4XAItnY41j85uLZMCbNLaI9.png', 1, '2023-01-22 16:36:41', '2023-03-08 05:21:26'),
(12, 'لوازم جانبی گوشی', 11, 3, '0', 'categories/Px6v2CFv5J5BuomvMQlW5qT052IEnOjb5tadGF7q.png', 1, '2023-01-22 16:36:57', '2023-02-12 18:14:39'),
(13, 'کیف و کاور گوشی', 12, 4, '0', 'categories/L1WSadtDivPTwsOUegAwrLrGmJjpWZtQghhMMUaB.png', 1, '2023-01-22 16:37:22', '2023-02-12 18:14:41'),
(14, 'پاور بانک', 12, 4, '0', 'categories/dZe7DpExkR19a8iOnM3LKWlhnUBRqKSmX0eEA8Qm.png', 1, '2023-01-22 16:37:32', '2023-02-11 15:01:43'),
(15, 'هدفون،هدست،هنذفری', 1, 2, '0', 'categories/93u3qSGVcRoayuGIP8THLkXrmx5ucUt4DKb9tEGu.png', 1, '2023-01-22 16:37:59', '2023-02-11 15:01:13'),
(16, 'دوربین', 1, 2, '0', 'categories/zXHwEWtFrOakrMSujlFOjjKg0254j1XI0Ihxbf6o.png', 0, '2023-01-22 16:38:16', '2023-02-11 15:00:21'),
(17, 'دوربین عکلسی دیجیتال', 16, 3, '0', 'categories/mbogdIYF8SLDZnMlzJhUVAjVX56Q6xHY6nbQdJkc.png', 0, '2023-01-22 16:38:38', '2023-01-22 16:38:38'),
(18, 'مردانه', 3, 2, '0', 'categories/tD4uR1OLyxXUBixlhtnT65GIkbhJeCfB1XCJv1Py.png', 0, '2023-01-22 16:39:05', '2023-01-22 16:39:05'),
(19, 'لباس مردانه', 18, 3, '0', 'categories/mZ2oBdUeO5lzug6sHp6NXFPo84ltTf0t6q86WOvd.png', 1, '2023-01-22 16:39:17', '2023-02-17 16:14:49'),
(20, 'سوییشرت و هودی مردانه', 19, 4, '0', 'categories/2YMoiu2tcXR8HqgAWugjaCcEKHAl3wWPJTS3WlmV.png', 0, '2023-01-22 16:39:43', '2023-02-11 15:00:26'),
(21, 'کفش مردانه', 18, 3, '0', 'categories/7JZkxN3AhNPF9mCs33ywo03vb76Cs3S7G1nWby4O.png', 0, '2023-01-22 16:40:16', '2023-02-11 15:00:26'),
(22, 'کفش روزمره', 21, 4, '0', 'categories/EFiGCIxjoJN7ssOJV14pqmdwcgqsIi6wjJtlovha.png', 0, '2023-01-22 16:40:31', '2023-02-11 15:00:27'),
(23, 'زنانه', 3, 2, '0', 'categories/253rBZg8cma6XDBNWFBlVSglv44Pj9u1DJunr3Xm.png', 1, '2023-01-22 16:40:43', '2023-02-17 16:14:50'),
(24, 'لباس زنانه', 23, 3, '0', 'categories/AoDsrGQbp5o4PfRvMy3r2BVskPa7rekMT4WExJFF.png', 0, '2023-01-22 16:40:55', '2023-02-11 15:00:28'),
(25, 'اکسسوری زنانه', 23, 3, '0', 'categories/AXhSLssW1fh24f26ZNcJMZ5bPowZgM3yorghUUdb.png', 0, '2023-01-22 16:41:34', '2023-02-11 15:00:29'),
(26, 'ساعت', 25, 4, '0', 'categories/BH9nIJnukGOovy15LOLdGTONxvP2cBGVqWc9bdx9.png', 1, '2023-01-22 16:41:47', '2023-02-11 15:01:23'),
(27, 'کالاهای اساسی و خوارو بار', 4, 2, '0', 'categories/Mm7zYsfm8U3GEc93vugmUBvNl4SKlwcDQHMe0pVs.png', 0, '2023-01-22 16:42:42', '2023-01-22 16:42:42'),
(28, 'نان', 27, 3, '0', 'categories/b0KfiwBrhnh4LxrdP04qUGW52G5Fe4BrIELy9mCe.png', 1, '2023-01-22 16:43:10', '2023-02-11 15:01:25'),
(29, 'برنج', 27, 3, '0', 'categories/sZFTedcm9XPFfzq4md6StxecrvTVd1XIMOSASW0d.png', 0, '2023-01-22 16:43:22', '2023-02-11 15:00:30'),
(30, 'روغن', 27, 3, '0', 'categories/WSJmRsaM7Z7uKhLJAzSxfAVTGOA3z3ftbPF3L1by.png', 1, '2023-01-22 16:43:38', '2023-02-17 16:14:53'),
(31, 'قند', 27, 3, '0', 'categories/YuuBq8dFitYVA3LCB0vjSNtvxkYWQfbKIf0NVvXj.png', 0, '2023-01-22 16:43:49', '2023-01-22 16:43:49'),
(32, 'صبحانه', 4, 2, '0', 'categories/YuuBq8dFitYVA3LCB0vjSNtvxkYWQfbKIf0NVvXj.png', 0, '2023-01-22 16:44:06', '2023-02-11 15:00:32'),
(33, 'مربا', 32, 3, '0', 'categories/5fHHzI12j8qllbs4Dxc33UKi0KfhdH3vnkwPfJrQ.png', 1, '2023-01-22 16:44:23', '2023-02-11 15:01:27'),
(34, 'عسل', 32, 3, '0', 'categories/WwS8z7P9SVJ1tNdYlc7XMKZP6MR7rgDsEQwyMMhi.png', 0, '2023-01-22 16:44:35', '2023-01-22 16:44:35'),
(35, 'موبایل', 1, 2, '0', 'categories/rdtYpDEvOQ4khGubqt4I85JO6uNhAMRBSsMCGFlg.png', 1, '2023-01-22 17:21:51', '2023-02-11 15:01:09'),
(36, 'لپتاپ', 1, 2, '0', 'categories/qZFFptxMilMjfqzwXiZ91pcJlKIzH1NTJC61mbY3.png', 1, '2023-02-08 13:22:23', '2023-02-11 15:01:09'),
(37, 'کالاهای اساسی', 0, 1, 'categories/vzyfdJ4mlk2RhK5YfIBJLZUDB90OmsDMiHOWWSZm.svg', 'categories/cOzImbxiIeWfacpZasjVBfFnVy2ZfyXVN8bLWmCX.png', 0, '2023-02-11 12:50:22', '2023-02-11 12:50:22'),
(38, 'خیلی اساسی', 37, 2, '0', 'categories/2aA0xlbskDdd5LB5a2q82tTQiFUSDh8rr6xtj9Xj.png', 0, '2023-02-11 13:19:38', '2023-02-11 13:19:38'),
(39, 'خیلی اساسی تر', 37, 2, '0', 'categories/HzBETsmZTiJ2wDQo9vs8ppMwDA7KhbekD8HHsJ7B.png', 0, '2023-02-11 13:21:31', '2023-02-11 13:21:31'),
(40, 'شلوار مردانه', 19, 4, '0', 'categories/ODo4ARnhR1CeKKQbzHq6IDect9B6xRi3sqES7oGc.png', 1, '2023-02-11 13:22:11', '2023-02-17 16:14:48'),
(41, 'اساسی جدید', 38, 3, '0', 'categories/8Fy96i97nO4tZ1YkRLe98opkfYLNfvSkR2wxZgYP.png', 0, '2023-02-11 13:27:11', '2023-02-11 13:27:11');

-- --------------------------------------------------------

--
-- Table structure for table `categoryables`
--

CREATE TABLE `categoryables` (
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `categoryable_type` varchar(255) NOT NULL,
  `categoryable_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categoryables`
--

INSERT INTO `categoryables` (`category_id`, `categoryable_type`, `categoryable_id`) VALUES
(36, 'App\\Models\\Product', 1),
(1, 'App\\Models\\Product', 1),
(13, 'App\\Models\\Product', 2),
(12, 'App\\Models\\Product', 2),
(11, 'App\\Models\\Product', 2),
(1, 'App\\Models\\Product', 2),
(13, 'App\\Models\\Variety', 1),
(12, 'App\\Models\\Variety', 1),
(11, 'App\\Models\\Variety', 1),
(1, 'App\\Models\\Variety', 1),
(13, 'App\\Models\\Variety', 2),
(12, 'App\\Models\\Variety', 2),
(11, 'App\\Models\\Variety', 2),
(1, 'App\\Models\\Variety', 2),
(36, 'App\\Models\\Variety', 3),
(1, 'App\\Models\\Variety', 3),
(35, 'App\\Models\\Product', 3),
(1, 'App\\Models\\Product', 3),
(35, 'App\\Models\\Product', 4),
(1, 'App\\Models\\Product', 4),
(35, 'App\\Models\\Product', 5),
(1, 'App\\Models\\Product', 5),
(35, 'App\\Models\\Product', 6),
(1, 'App\\Models\\Product', 6),
(13, 'App\\Models\\Product', 7),
(12, 'App\\Models\\Product', 7),
(11, 'App\\Models\\Product', 7),
(1, 'App\\Models\\Product', 7),
(13, 'App\\Models\\Product', 8),
(12, 'App\\Models\\Product', 8),
(11, 'App\\Models\\Product', 8),
(1, 'App\\Models\\Product', 8),
(13, 'App\\Models\\Product', 9),
(12, 'App\\Models\\Product', 9),
(11, 'App\\Models\\Product', 9),
(1, 'App\\Models\\Product', 9),
(36, 'App\\Models\\Product', 10),
(1, 'App\\Models\\Product', 10),
(36, 'App\\Models\\Product', 11),
(1, 'App\\Models\\Product', 11),
(36, 'App\\Models\\Product', 12),
(1, 'App\\Models\\Product', 12),
(36, 'App\\Models\\Product', 13),
(1, 'App\\Models\\Product', 13),
(15, 'App\\Models\\Product', 14),
(1, 'App\\Models\\Product', 14),
(15, 'App\\Models\\Product', 15),
(1, 'App\\Models\\Product', 15),
(15, 'App\\Models\\Product', 16),
(1, 'App\\Models\\Product', 16),
(14, 'App\\Models\\Product', 17),
(12, 'App\\Models\\Product', 17),
(11, 'App\\Models\\Product', 17),
(1, 'App\\Models\\Product', 17),
(14, 'App\\Models\\Product', 18),
(12, 'App\\Models\\Product', 18),
(11, 'App\\Models\\Product', 18),
(1, 'App\\Models\\Product', 18),
(14, 'App\\Models\\Product', 19),
(12, 'App\\Models\\Product', 19),
(11, 'App\\Models\\Product', 19),
(1, 'App\\Models\\Product', 19),
(28, 'App\\Models\\Product', 20),
(27, 'App\\Models\\Product', 20),
(4, 'App\\Models\\Product', 20),
(28, 'App\\Models\\Product', 21),
(27, 'App\\Models\\Product', 21),
(4, 'App\\Models\\Product', 21),
(26, 'App\\Models\\Product', 22),
(25, 'App\\Models\\Product', 22),
(23, 'App\\Models\\Product', 22),
(3, 'App\\Models\\Product', 22),
(26, 'App\\Models\\Product', 23),
(25, 'App\\Models\\Product', 23),
(23, 'App\\Models\\Product', 23),
(3, 'App\\Models\\Product', 23),
(22, 'App\\Models\\Product', 24),
(21, 'App\\Models\\Product', 24),
(18, 'App\\Models\\Product', 24),
(3, 'App\\Models\\Product', 24),
(22, 'App\\Models\\Product', 25),
(21, 'App\\Models\\Product', 25),
(18, 'App\\Models\\Product', 25),
(3, 'App\\Models\\Product', 25),
(20, 'App\\Models\\Product', 26),
(19, 'App\\Models\\Product', 26),
(18, 'App\\Models\\Product', 26),
(3, 'App\\Models\\Product', 26),
(20, 'App\\Models\\Product', 27),
(19, 'App\\Models\\Product', 27),
(18, 'App\\Models\\Product', 27),
(3, 'App\\Models\\Product', 27),
(33, 'App\\Models\\Product', 28),
(32, 'App\\Models\\Product', 28),
(4, 'App\\Models\\Product', 28),
(33, 'App\\Models\\Product', 29),
(32, 'App\\Models\\Product', 29),
(4, 'App\\Models\\Product', 29),
(33, 'App\\Models\\Product', 30),
(32, 'App\\Models\\Product', 30),
(4, 'App\\Models\\Product', 30),
(34, 'App\\Models\\Product', 31),
(32, 'App\\Models\\Product', 31),
(4, 'App\\Models\\Product', 31),
(31, 'App\\Models\\Product', 32),
(27, 'App\\Models\\Product', 32),
(4, 'App\\Models\\Product', 32),
(30, 'App\\Models\\Product', 33),
(27, 'App\\Models\\Product', 33),
(4, 'App\\Models\\Product', 33),
(30, 'App\\Models\\Product', 34),
(27, 'App\\Models\\Product', 34),
(4, 'App\\Models\\Product', 34),
(30, 'App\\Models\\Variety', 4),
(27, 'App\\Models\\Variety', 4),
(4, 'App\\Models\\Variety', 4),
(30, 'App\\Models\\Variety', 5),
(27, 'App\\Models\\Variety', 5),
(4, 'App\\Models\\Variety', 5),
(31, 'App\\Models\\Variety', 6),
(27, 'App\\Models\\Variety', 6),
(4, 'App\\Models\\Variety', 6),
(31, 'App\\Models\\Variety', 7),
(27, 'App\\Models\\Variety', 7),
(4, 'App\\Models\\Variety', 7),
(34, 'App\\Models\\Variety', 8),
(32, 'App\\Models\\Variety', 8),
(4, 'App\\Models\\Variety', 8),
(33, 'App\\Models\\Variety', 9),
(32, 'App\\Models\\Variety', 9),
(4, 'App\\Models\\Variety', 9),
(33, 'App\\Models\\Variety', 10),
(32, 'App\\Models\\Variety', 10),
(4, 'App\\Models\\Variety', 10),
(33, 'App\\Models\\Variety', 11),
(32, 'App\\Models\\Variety', 11),
(4, 'App\\Models\\Variety', 11),
(33, 'App\\Models\\Variety', 12),
(32, 'App\\Models\\Variety', 12),
(4, 'App\\Models\\Variety', 12),
(20, 'App\\Models\\Variety', 13),
(19, 'App\\Models\\Variety', 13),
(18, 'App\\Models\\Variety', 13),
(3, 'App\\Models\\Variety', 13),
(20, 'App\\Models\\Variety', 14),
(19, 'App\\Models\\Variety', 14),
(18, 'App\\Models\\Variety', 14),
(3, 'App\\Models\\Variety', 14),
(20, 'App\\Models\\Variety', 15),
(19, 'App\\Models\\Variety', 15),
(18, 'App\\Models\\Variety', 15),
(3, 'App\\Models\\Variety', 15),
(20, 'App\\Models\\Variety', 16),
(19, 'App\\Models\\Variety', 16),
(18, 'App\\Models\\Variety', 16),
(3, 'App\\Models\\Variety', 16),
(22, 'App\\Models\\Variety', 17),
(21, 'App\\Models\\Variety', 17),
(18, 'App\\Models\\Variety', 17),
(3, 'App\\Models\\Variety', 17),
(22, 'App\\Models\\Variety', 18),
(21, 'App\\Models\\Variety', 18),
(18, 'App\\Models\\Variety', 18),
(3, 'App\\Models\\Variety', 18),
(22, 'App\\Models\\Variety', 19),
(21, 'App\\Models\\Variety', 19),
(18, 'App\\Models\\Variety', 19),
(3, 'App\\Models\\Variety', 19),
(26, 'App\\Models\\Variety', 20),
(25, 'App\\Models\\Variety', 20),
(23, 'App\\Models\\Variety', 20),
(3, 'App\\Models\\Variety', 20),
(26, 'App\\Models\\Variety', 21),
(25, 'App\\Models\\Variety', 21),
(23, 'App\\Models\\Variety', 21),
(3, 'App\\Models\\Variety', 21),
(28, 'App\\Models\\Variety', 22),
(27, 'App\\Models\\Variety', 22),
(4, 'App\\Models\\Variety', 22),
(28, 'App\\Models\\Variety', 23),
(27, 'App\\Models\\Variety', 23),
(4, 'App\\Models\\Variety', 23),
(14, 'App\\Models\\Variety', 24),
(12, 'App\\Models\\Variety', 24),
(11, 'App\\Models\\Variety', 24),
(1, 'App\\Models\\Variety', 24),
(14, 'App\\Models\\Variety', 25),
(12, 'App\\Models\\Variety', 25),
(11, 'App\\Models\\Variety', 25),
(1, 'App\\Models\\Variety', 25),
(14, 'App\\Models\\Variety', 26),
(12, 'App\\Models\\Variety', 26),
(11, 'App\\Models\\Variety', 26),
(1, 'App\\Models\\Variety', 26),
(14, 'App\\Models\\Variety', 27),
(12, 'App\\Models\\Variety', 27),
(11, 'App\\Models\\Variety', 27),
(1, 'App\\Models\\Variety', 27),
(14, 'App\\Models\\Variety', 28),
(12, 'App\\Models\\Variety', 28),
(11, 'App\\Models\\Variety', 28),
(1, 'App\\Models\\Variety', 28),
(14, 'App\\Models\\Variety', 29),
(12, 'App\\Models\\Variety', 29),
(11, 'App\\Models\\Variety', 29),
(1, 'App\\Models\\Variety', 29),
(15, 'App\\Models\\Variety', 30),
(1, 'App\\Models\\Variety', 30),
(15, 'App\\Models\\Variety', 31),
(1, 'App\\Models\\Variety', 31),
(15, 'App\\Models\\Variety', 32),
(1, 'App\\Models\\Variety', 32),
(15, 'App\\Models\\Variety', 33),
(1, 'App\\Models\\Variety', 33),
(15, 'App\\Models\\Variety', 34),
(1, 'App\\Models\\Variety', 34),
(36, 'App\\Models\\Variety', 35),
(1, 'App\\Models\\Variety', 35),
(36, 'App\\Models\\Variety', 36),
(1, 'App\\Models\\Variety', 36),
(36, 'App\\Models\\Variety', 37),
(1, 'App\\Models\\Variety', 37),
(36, 'App\\Models\\Variety', 38),
(1, 'App\\Models\\Variety', 38),
(36, 'App\\Models\\Variety', 39),
(1, 'App\\Models\\Variety', 39),
(13, 'App\\Models\\Variety', 40),
(12, 'App\\Models\\Variety', 40),
(11, 'App\\Models\\Variety', 40),
(1, 'App\\Models\\Variety', 40),
(13, 'App\\Models\\Variety', 41),
(12, 'App\\Models\\Variety', 41),
(11, 'App\\Models\\Variety', 41),
(1, 'App\\Models\\Variety', 41),
(13, 'App\\Models\\Variety', 42),
(12, 'App\\Models\\Variety', 42),
(11, 'App\\Models\\Variety', 42),
(1, 'App\\Models\\Variety', 42),
(13, 'App\\Models\\Variety', 43),
(12, 'App\\Models\\Variety', 43),
(11, 'App\\Models\\Variety', 43),
(1, 'App\\Models\\Variety', 43),
(13, 'App\\Models\\Variety', 44),
(12, 'App\\Models\\Variety', 44),
(11, 'App\\Models\\Variety', 44),
(1, 'App\\Models\\Variety', 44),
(13, 'App\\Models\\Variety', 45),
(12, 'App\\Models\\Variety', 45),
(11, 'App\\Models\\Variety', 45),
(1, 'App\\Models\\Variety', 45),
(35, 'App\\Models\\Variety', 46),
(1, 'App\\Models\\Variety', 46),
(35, 'App\\Models\\Variety', 47),
(1, 'App\\Models\\Variety', 47),
(35, 'App\\Models\\Variety', 48),
(1, 'App\\Models\\Variety', 48),
(35, 'App\\Models\\Variety', 49),
(1, 'App\\Models\\Variety', 49),
(35, 'App\\Models\\Variety', 50),
(1, 'App\\Models\\Variety', 50),
(35, 'App\\Models\\Variety', 51),
(1, 'App\\Models\\Variety', 51),
(20, 'App\\Models\\Variety', 52),
(19, 'App\\Models\\Variety', 52),
(18, 'App\\Models\\Variety', 52),
(3, 'App\\Models\\Variety', 52),
(15, 'App\\Models\\Variety', 53),
(1, 'App\\Models\\Variety', 53),
(35, 'App\\Models\\Variety', 54),
(1, 'App\\Models\\Variety', 54),
(35, 'App\\Models\\Variety', 55),
(1, 'App\\Models\\Variety', 55),
(36, 'App\\Models\\Variety', 56),
(1, 'App\\Models\\Variety', 56),
(15, 'App\\Models\\Variety', 57),
(1, 'App\\Models\\Variety', 57);

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `name`, `color`, `created_at`, `updated_at`) VALUES
(1, 'مشکی', '#000000', '2023-01-22 16:47:04', '2023-01-22 16:47:04'),
(2, 'آبی', '#0080ff', '2023-01-22 16:47:23', '2023-01-22 16:47:23'),
(3, 'قرمز', '#ff0000', '2023-01-22 16:47:37', '2023-01-22 16:47:37'),
(4, 'زرد', '#ffff00', '2023-01-22 16:47:46', '2023-01-22 16:47:46'),
(5, 'سبز', '#00ff40', '2023-01-22 16:47:59', '2023-01-22 16:47:59'),
(6, 'سفید', '#ffffff', '2023-01-22 16:48:17', '2023-01-22 16:48:17'),
(7, 'یاسی', '#8080ff', '2023-02-13 10:25:18', '2023-02-13 10:25:18'),
(10, 'صورتی', '#ff80c0', '2023-02-13 10:41:49', '2023-02-13 10:41:49'),
(11, 'نارنجی روشن', '#ff8000', '2023-02-13 10:56:00', '2023-02-13 10:56:00'),
(12, 'خاکی', '#ded7bc', '2023-02-23 03:47:34', '2023-02-23 03:47:34');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `text` varchar(1500) NOT NULL,
  `titr` varchar(250) NOT NULL,
  `proposal` int(11) NOT NULL DEFAULT 1,
  `active` int(11) NOT NULL DEFAULT 0,
  `score` enum('5','4','3','2','1','0') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `product_id`, `user_id`, `text`, `titr`, `proposal`, `active`, `score`, `created_at`, `updated_at`) VALUES
(1, 2, 2, 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.', 'خوبه', 1, 0, '3', '2023-02-14 07:08:44', '2023-03-08 05:22:59'),
(3, 5, 3, 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در', 'عالیه', 1, 1, '5', '2023-02-14 07:12:47', '2023-02-14 07:12:47'),
(4, 5, 4, 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.', 'بد نیست', 1, 1, '3', '2023-02-14 07:13:05', '2023-02-17 16:11:51'),
(5, 5, 5, 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و', 'راضی نیستم', 0, 1, '2', '2023-02-14 07:13:26', '2023-02-17 16:11:39'),
(6, 20, 6, 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.', 'خیلی خوبه', 1, 1, '4', '2023-02-14 07:13:51', '2023-02-22 12:37:29'),
(7, 20, 7, 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.', 'میتونست بهتر باشه', 0, 1, '2', '2023-02-14 07:14:09', '2023-02-14 07:14:09'),
(8, 20, 2, 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.', 'راضی ام', 1, 1, '4', '2023-02-14 07:15:30', '2023-03-08 05:22:56');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2023-02-08 20:56:50', '2023-02-08 20:56:50'),
(2, 1, 1, '2023-02-09 07:53:26', '2023-02-09 07:53:26'),
(4, 1, 3, '2023-02-10 13:16:46', '2023-02-10 13:16:46'),
(5, 1, 4, '2023-02-10 16:06:45', '2023-02-10 16:06:45'),
(6, 1, 6, '2023-02-10 16:06:56', '2023-02-10 16:06:56'),
(7, 1, 10, '2023-02-10 16:07:11', '2023-02-10 16:07:11'),
(8, 1, 27, '2023-02-11 07:21:38', '2023-02-11 07:21:38');

-- --------------------------------------------------------

--
-- Table structure for table `home_views`
--

CREATE TABLE `home_views` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `brand_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `image` varchar(500) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_views`
--

INSERT INTO `home_views` (`id`, `category_id`, `brand_id`, `image`, `created_at`, `updated_at`) VALUES
(1, 1, 0, '#53d5bb', NULL, '2023-02-05 11:45:37'),
(2, 11, 0, 'home/special-four/ck1Px1scUPncbFqYJMlpEu8leQW4YCWl0qZ5rYCb.jpg', NULL, '2023-02-05 17:22:37'),
(3, 13, 0, 'home/special-four/Gnc5FhqimBHRkzp4klEtNt8M8klZlVc9GfQq9hkp.jpg', NULL, '2023-02-05 17:22:37'),
(4, 29, 0, 'home/special-four/7r34U1apvSkFG9znXhwMfoqWN5za5AIibBJ2VN2F.gif', NULL, '2023-02-05 17:22:37'),
(5, 3, 0, 'home/special-four/HZclq9wddG8kgp1k6DM7AJgE4QBrwRtcUqSR1K1g.jpg', NULL, '2023-02-05 17:22:37'),
(6, 4, 0, 'home/special-two/k4g1tvQUV72o42ZVnaZieq6aZUtoj6FiC0IhEDhv.jpg', NULL, '2023-02-05 17:26:23'),
(7, 15, 0, 'home/special-two/AxmGujfhgmwSGC3obI5UtFwt60By8OVsatSWsQ6d.jpg', NULL, '2023-02-05 17:26:23'),
(8, 4, 5, 'home/special-one/jH9hoSemKwOCCE5AI77rdRxpzomfdZAwCQpY73k8.jpg', NULL, '2023-02-05 17:27:05'),
(9, 1, 6, 'home/special-head/KJ1wguvMqlswiNS3JEfYt52ckGlM4t6w6pTjF7XP.gif', NULL, '2023-02-05 17:25:19');

-- --------------------------------------------------------

--
-- Table structure for table `massages`
--

CREATE TABLE `massages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `seller_id` bigint(20) UNSIGNED NOT NULL,
  `about` varchar(1500) NOT NULL,
  `seen` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `massages`
--

INSERT INTO `massages` (`id`, `seller_id`, `about`, `seen`, `created_at`, `updated_at`) VALUES
(1, 2, 'رنگ مورد نظر اضافه شد', 0, '2023-02-15 12:59:50', '2023-02-15 19:14:26'),
(2, 3, 'عکس اضافه شد', 0, '2023-02-15 13:01:03', '2023-02-15 13:01:03'),
(3, 2, 'گارانتی مورد نظر موجود میباشد', 1, '2023-02-15 13:03:34', '2023-02-15 19:03:37'),
(4, 1, 'برند درخواستی معتبر نیست', 0, '2023-02-15 13:03:48', '2023-02-15 13:03:48'),
(5, 2, 'دسته درخواستی اضافه شد', 1, '2023-02-15 13:04:05', '2023-02-15 19:03:36'),
(6, 2, 'از دسته کالاهای اساسی استفاده کنید', 1, '2023-02-15 13:04:37', '2023-02-15 19:03:54');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(33, '2014_10_12_000000_create_users_table', 1),
(34, '2014_10_12_100000_create_password_resets_table', 1),
(35, '2019_08_19_000000_create_failed_jobs_table', 1),
(36, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(37, '2022_12_21_181526_create_categories_table', 1),
(38, '2022_12_30_085933_create_sliders_table', 1),
(39, '2022_12_31_143931_create_colors_table', 1),
(40, '2022_12_31_151809_create_sizes_table', 1),
(41, '2022_12_31_160502_create_weights_table', 1),
(42, '2022_12_31_164134_create_volumes_table', 1),
(43, '2022_12_31_171629_create_warranties_table', 1),
(44, '2022_12_31_190908_create_brands_table', 1),
(45, '2023_01_01_171650_create_products_table', 1),
(46, '2023_01_04_155117_create_varieties_table', 1),
(47, '2023_01_08_153421_create_home_views_table', 1),
(48, '2023_01_13_161007_create_articles_table', 1),
(50, '2023_01_28_183531_create_nums_table', 2),
(54, '2023_01_30_080551_create_comments_table', 3),
(56, '2023_01_31_083520_create_favorites_table', 4),
(57, '2023_02_03_105843_add_a_field_to_users', 5),
(64, '2023_02_03_111142_add_a_field_to_varieties', 6),
(65, '2023_02_03_131026_create_orders_table', 6),
(70, '2023_01_01_163332_create_requests_table', 7),
(71, '2023_01_01_163821_create_massages_table', 7),
(72, '2014_10_12_100000_create_password_reset_tokens_table', 8),
(73, '2023_04_22_113746_again_add_a_field_to_varieties', 8);

-- --------------------------------------------------------

--
-- Table structure for table `nums`
--

CREATE TABLE `nums` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `number` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nums`
--

INSERT INTO `nums` (`id`, `number`, `created_at`, `updated_at`) VALUES
(1, '100', '2023-01-28 15:08:24', '2023-01-28 15:08:24'),
(2, '200', '2023-01-28 15:09:36', '2023-01-28 15:09:36'),
(3, '300', '2023-01-28 15:09:38', '2023-01-28 15:09:38'),
(4, '400', '2023-01-28 15:09:40', '2023-01-28 15:09:40'),
(5, '500', '2023-01-28 15:09:42', '2023-01-28 15:09:42'),
(6, '600', '2023-01-28 15:09:44', '2023-01-28 15:09:44'),
(7, '70', '2023-02-13 11:58:40', '2023-02-13 11:58:40');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_val` bigint(20) UNSIGNED NOT NULL,
  `buyer_id` bigint(20) UNSIGNED NOT NULL,
  `variety_id` bigint(20) UNSIGNED NOT NULL,
  `number` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `pay_status` enum('online','offline') NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `address` varchar(1500) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `order_status` enum('sending','sent','canceled') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_val`, `buyer_id`, `variety_id`, `number`, `price`, `pay_status`, `date`, `time`, `address`, `phone`, `order_status`, `created_at`, `updated_at`) VALUES
(1, 10, 2, 2, 2, 2590000, 'offline', '2023-02-12 00:24:40', '12 - 15', 'البرز - کرج - کمالشهر', '09190790801', 'sent', '2023-02-08 20:54:49', '2023-02-20 13:46:18'),
(2, 11, 1, 3, 1, 495000000, 'offline', '2023-02-13 11:26:12', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sending', '2023-02-09 07:56:36', '2023-02-20 13:49:32'),
(3, 12, 1, 14, 1, 13500000, 'offline', '2023-02-19 23:12:55', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sent', '2023-02-11 19:43:04', '2023-02-14 17:59:15'),
(4, 12, 1, 15, 2, 16900000, 'offline', '2023-02-19 23:12:55', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sent', '2023-02-11 19:43:04', '2023-02-12 16:00:15'),
(5, 12, 1, 32, 1, 32500000, 'offline', '2023-02-19 23:12:55', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sent', '2023-02-11 19:43:04', '2023-03-08 05:46:17'),
(6, 12, 1, 33, 2, 33500000, 'offline', '2023-02-19 23:12:55', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sent', '2023-02-11 19:43:04', '2023-02-12 16:09:44'),
(7, 12, 1, 38, 1, 690000000, 'offline', '2023-02-19 23:12:55', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'canceled', '2023-02-11 19:43:04', '2023-02-12 16:08:38'),
(8, 12, 1, 46, 1, 775000000, 'offline', '2023-02-19 23:12:55', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sent', '2023-02-11 19:43:04', '2023-02-15 04:50:22'),
(9, 12, 1, 48, 1, 539000000, 'offline', '2023-02-19 23:12:55', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sending', '2023-02-11 19:43:04', '2023-02-20 13:49:38'),
(10, 12, 1, 51, 1, 930000000, 'offline', '2023-02-19 23:12:55', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sending', '2023-02-11 19:43:04', '2023-02-20 13:49:37'),
(11, 20, 1, 51, 1, 930000000, 'offline', '2023-02-11 23:35:22', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sent', '2023-02-11 20:05:50', '2023-02-15 13:42:08'),
(12, 21, 1, 53, 2, 27500000, 'offline', '2023-02-15 14:41:21', '9 - 12', 'البرز - کرج - کمالشهر', '09190790801', 'sending', '2023-02-12 11:12:01', '2023-02-20 13:49:33'),
(13, 22, 1, 53, 2, 27500000, 'offline', '2023-02-15 15:28:42', '9 - 12', 'البرز - کرج - کمالشهر', '09190790801', 'sent', '2023-02-12 11:58:49', '2023-02-15 13:42:30'),
(14, 23, 2, 39, 1, 680000000, 'offline', '2023-02-22 09:24:42', '12 - 15', 'تهران - شهرری', '09192356894', 'sent', '2023-02-17 05:54:54', '2023-03-08 05:21:51'),
(15, 24, 1, 22, 1, 590000, 'offline', '2023-02-23 16:07:43', '9 - 12', 'البرز - کرج - کمالشهر', '09190790801', 'sending', '2023-02-22 12:37:54', '2023-02-22 12:37:54'),
(16, 25, 1, 46, 1, 775000000, 'offline', '2023-03-13 08:47:06', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sending', '2023-03-08 05:17:18', '2023-03-08 05:17:18'),
(17, 25, 1, 50, 1, 620000000, 'offline', '2023-03-13 08:47:06', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sending', '2023-03-08 05:17:18', '2023-03-08 05:17:18'),
(18, 25, 1, 55, 2, 625000000, 'offline', '2023-03-13 08:47:06', '15 - 18', 'البرز - کرج - کمالشهر', '09190790801', 'sending', '2023-03-08 05:17:18', '2023-03-08 05:17:18');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dkp` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `about` varchar(1500) NOT NULL,
  `variety_type` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `width` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `depth` int(11) NOT NULL,
  `Weight` int(11) NOT NULL,
  `active` int(11) NOT NULL DEFAULT 0,
  `image` varchar(10000) NOT NULL,
  `massage` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `dkp`, `name`, `brand_id`, `about`, `variety_type`, `user_id`, `width`, `height`, `depth`, `Weight`, `active`, `image`, `massage`, `created_at`, `updated_at`) VALUES
(1, 1001, 'لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020', 12, 'موردانتظارترین و تأثیرگذارترین رویداد اپل در سال 2020، نخستین کامپیوتر‌های مک با پردازنده‌ی اختصاصی این شرکت را به‌ارمغان آورد. مک‌بوک ایر نخستین لپ‌تاپ اپل با پردازنده‌ی مبتنی‌بر ARM کوپرتینونشین‌ها موسوم به M1 خواهد بود.همان‌طور که انتظار می‌رفت مک‌بوک ایر به‌لحاظ ظاهر و طراحی هیچ تفاوتی با نسخه‌ی اینتل ندارد و همانند گذشته است. تغییرات اصلی مک‌ بوک ایر در داخل آن رخ می‌دهد؛ جایی‌که تراشه اختصاصی M1 توان پردازشی موردنیاز کاربر را با بهره‌وری بالاتر و مصرف انرژی کمتر فراهم م ...', 'null', 3, 30, 20, 20, 1500, 1, 'products/1001/RpSm0gWjU5mBoFoKgRrn47P2F5kEJFKPoAEGycHg.jpg,products/1001/XT0XLUIGF4G1GLteseVUMVb7t1Yg0LgEfTBi5tZO.jpg,products/1001/isP5i5drjSrWxnW7wCcAN8EumcIa01yeeE3xeDu4.jpg,products/1001/OBovEtMOyisenIhskXWhFeto9Hq2QvVi3bFcmaYl.jpg,products/1001/0hbcPPuXinRtCwICq3Cth8FiVqU6XXemjoA0lXrZ.jpg,products/1001/rsIux9OxjKPhtlHfxkTcoXQzDXHIpuu6SLUSV5oP.jpg,', '0', '2023-02-08 13:38:12', '2023-02-09 08:39:02'),
(2, 1002, 'کاور ونزو مدل Prime مناسب برای گوشی موبایل شیائومی Redmi Note 10 5G / Poco M3 Pro', 7, 'قاب ونزو مدل Prime مناسب برای گوشی موبایل شما، با توجه به طراحی مهندسی شده احساس فوق‌العاده ای به وجود می آورد و با داشتن استانداد نظامی سقوط از ارتفاع 3 متر باعث محافظت کامل از گوشی همراه شما می شود. این قاب به گونه ای طراحی شده است که داری ویژگی مقاومت در برابر ضربه به صورت 360 درجه ، محافظ لنزهای دوربین می باشد. فروش بالا و همچنین رضایت کاربران این قاب در سال 2021 باعث شد که شرکت بزرگ ونزو تولید این قاب باکیفیت را در ظاهری شکیل تر در سال 2022 نیز ادامه بدهد. ویژگی منحصر به ...', 'color', 3, 20, 20, 20, 20, 1, 'products/1002/VX0DQuVH1OuevWfzoAMhqu98GAKe5PDJUGNlDzcz.jpg,products/1002/NuzGzBirc4t3vx6umMk4Yiyw1EUcvXlho5E5LdIl.jpg,products/1002/XIe4Bly88TGjdzO5YK75AX1rvrT6SdUwoCqOv3fu.jpg,products/1002/HpsG3xfNArrcRV2Q0e5lQR5QrKtxf0ZwqRSRx3iT.jpg,products/1002/v3zWFzRldN2Vw0wDHVmarVF6j78UfbMO2Sg84Wqf.jpg,products/1002/srkQ1YCSzA8Ao5bkd4Wbm5w9tNcAZF2hivTjItI1.jpg,', '0', '2023-02-08 15:31:30', '2023-02-09 12:50:55'),
(3, 1003, 'گوشی موبایل اپل مدل iphone 14 Pro دو سیم کارت ظرفیت 256 گیگابایت و 6 گیگابایت رم', 12, 'iphone 14 Pro به عنوان یکی از جدید‌ترین گوشی‌های هوشمند پرچمدار این شرکت بصورت رسمی معرفی شد و این بار با مشخصات قدرتمند وارد میدان رقابت شده است. اصلی‌ترین تفاوت در نظر گرفته شده برای این گوشی هوشمند به نسبت نسب قبلی، بدون شک طراحی متفاوت ناچ صفحه‌نمایش است که این بار قابلیت‌های بسیار جذابی را در اختیارتان قرار می‌دهد. ناچی که اعلان‌های مختلف را به شما نشان می‌دهد وکاربرد بسیار بالایی دارد. در نمای رو‌به‌رویی این گوشی به صفحه‌نمایش با ابعاد 6.1 اینچ و رزولوشن 1179×2556 پیکسل ...', 'color', 1, 20, 20, 20, 1500, 1, 'products/1003/Pc7qLFUeX6kcUTocIWtjNH93Wi6sFYIxv3HXX3XZ.jpg,products/1003/u1vpiaYGD1DELpPv8vlTcVYNFnr6M5BWuY4nnYWB.jpg,products/1003/rWgSNHElkXjbva78YBxBGeuu9n93t5FAsvnE3GCo.jpg,products/1003/8vg51GrGd3vSEPFJY2iuqDyef1GiCh7aJSSyN3vn.jpg,products/1003/TcEHF3ajG6i0ouAyRKGEKJaGUO5fV50u2i6nANFq.jpg,products/1003/EwxAVj5F4XeqYsKtGONKqe7WdjtIAJWn3lGvYsR5.jpg,products/1003/JSYOPN4cIsBTffjN9QsDaaEulx6vGSFRRTS8JgHX.jpg,products/1003/wgWlauxLQjyhVHslXJSEBlSx619redPso7O6KDaJ.jpg,', '0', '2023-02-09 11:14:51', '2023-02-09 11:14:51'),
(4, 1004, 'گوشی موبایل اپل مدل iPhone 12 india تک سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - هند', 12, 'گوشی موبایل iPhone 12 india پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است که دقیقاً با تراکم پیکسلی iPhone XS برابر است. قاب پشتی آیفون جدید ...', 'color', 1, 20, 20, 20, 1500, 1, 'products/1004/dfjnHbsFBgfefjP9fJg2zssKeKN0XgL939kp6MGw.jpg,products/1004/VpBDINfxld87VBNR6SsOmhtGVKeJZxydJ5TXUCoQ.jpg,products/1004/D6wB2TGUNLxlVSJwY8DPjUfBZ5LEKowt5gLgwu1v.jpg,products/1004/QDDccdB29J7aW7sLMehW4tpHQKu9hhXiN7zjGPTC.jpg,products/1004/kVJ4nPV5XaVEoKzgXA2bsClhGqMt8TbBSr3xtprG.jpg,products/1004/VuXrrr3ZV3215PLoSXXtyRCTlf2sjuGSKS1lnIYL.jpg,products/1004/k905Oh5FbE9WSRzJ8WPqH3Tlb4CZQpHA21NR2KeT.jpg,products/1004/s3yYaf6DLkhSbesWRp9XOhFqYvI1nsYbKkM19zYg.jpg,products/1004/J35JCVgsNEULsQ6khkLarruZ9ScVzMqO1pVnIG6B.jpg,products/1004/g0BwWORH4QtZxBKf0tke0OSQVfQWoh6VGgDah2v6.jpg,', '0', '2023-02-09 11:17:15', '2023-02-09 11:17:15'),
(5, 1005, 'گوشی موبایل سامسونگ مدل Galaxy S22 Plus 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت نسخه اسنپدراگون', 7, 'سامسونگ Galaxy S22 Plus 5G در کنار دو گوشی هوشمند دیگر خانواده Galaxy S22 معرفی شد و در جایگاه یک گوشی هوشمند پرچمدار از مشخصات فنی قدرتمندی هم بهره برده است. طراحی کلی در نظر گرفته شده برای این گوشی هوشمند، تفاوت چندانی با مدل Galaxy S21 Plus ندارد. در نمای رو‌به‌رویی شاهد حضور صفحه‌نمایش زیبا با ابعاد 6.6 اینچ و رزولوشن 1080×2340 پیکسل از نوع Dynamic AMOLED 2X هستیم. صفحه‌نمایش بسیار قدرتمند که توانایی نمایش 393 پیکسل در هر اینچ و نرخ بروزرسانی 120 هرتز را دارد. بدون شک سام ...', 'color', 3, 20, 20, 20, 1500, 1, 'products/1005/jsMzroMHpwmZnGHcy5ZeZxlPgaSC4NxwpF8ZtWc1.jpg,products/1005/GgdjKqiLDSQByaRgUtNBf6ilNg7RGEHcDrQlEWJB.jpg,products/1005/8vJHwgaXBOQ2NfL4ZjcpWZ76E22HqXhjrUJAFulM.jpg,products/1005/argXWs6D1kds7PZF7yusixAnzrzjfLXSKRXjznFt.jpg,products/1005/5HDRZj4RvkXwLGM1060O5FGXWtBjwQbed8W8LaBO.jpg,products/1005/wb0CjUzzcSDK2t1WxpJEY5zpPaVWKKyWKSBxblJi.jpg,products/1005/xJX9a9IbEWps8EA4E8ZAB7RdlKJV6wnzAEXsx8IK.jpg,products/1005/SFmn80PHGpghafdDGL5yE2MvruBe9Twb49oBZUz3.jpg,', '0', '2023-02-09 11:19:37', '2023-02-09 11:19:37'),
(6, 1006, 'گوشی موبایل سامسونگ مدل Galaxy Z Fold4 دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت', 7, 'سامسونگ Galaxy Z Fold4 یکی از گوشی‌های هوشمند انعطاف پذیر جدید این شرکت است که مشخصات فنی قدرتمند و قابلیت‌های جذابی را با خود به‌همراه دارد. باید قبول کرد که سامسونگ در عرصه گوشی‌های هوشمند انعطاف پذیر، پیشگام بوده است و توانسته عملکرد بسیار خوبی را به‌نمایش بگذارد. طراحی جذاب این گوشی چندان تفاوتی با نسل قبلی، یعنی Galaxy Z Fold3 چندان تفاوتی ندارد. در حالت معمولی این گوشی هوشمند به صفحه‌نمایش با ابعاد 7.6 اینچ و رزولوشن 1812×2176 پیکسل از نوع Foldable Dynamic AMOLED 2X مجه ...', 'color', 1, 20, 20, 20, 1500, 1, 'products/1006/AuFuOzXbaPD2poFDHJmLruRl17TuYOvGxNtpLZMJ.jpg,products/1006/hdfwk3VE73WTdLpMoMDiLQhl0jTBQ2WE79RvsvPQ.jpg,products/1006/R8BhvLS6XKurAH24SZjHm8QCDQK0otVW2UsXoPF6.jpg,products/1006/to9pPTxou7SRZGOIoX6iW31eaBnA7ZsceK0rcYAZ.jpg,products/1006/Q3kdPWvxf6xGM9XgcAl7QIIfybhgQCqBWIlLwvL4.jpg,products/1006/9aH4XlR9wihb37yXpo4odruteuGr8i9uy0WcGCad.jpg,products/1006/VVE1CGpBeo1yeEzV3QmnT1UIPdFm1M4SBDNFzvSA.jpg,products/1006/yKdBQAirotptlYjqOJqhhwidVkGBYVzUhSsy5Oia.jpg,products/1006/9hXdCcPidI9ojnLzDC8ga3ndakWSslWWxNbpVkro.jpg,products/1006/jZtR5i3L5xbfhDSv1JNczSHkTp5flUyld6skeKfb.jpg,products/1006/sUTyDQNUSNAjLXbOykd1Ku2nXbm3t3e5fyWQU9Hl.jpg,products/1006/nc4yYI1ymtcznmOrSxlWZ9IqajiF6iD1dNBPVuin.jpg,', '0', '2023-02-09 11:22:00', '2023-02-09 11:22:00'),
(7, 1007, 'کاور قاب ناب مدل JLLZ-KPS مناسب برای گوشی موبایل سامسونگ Galaxy A13 4G', 11, 'ارسالش به موقع بود خریدش رو توصیه میکنم', 'color', 1, 20, 20, 20, 100, 0, 'products/1007/CeY7NNllhHrdPgR9meC9I6NwL2FSoRo1BoxmgnOW.jpg,products/1007/S5InJUUEy1ny9ftCtYB0Eay8YX6VhhSEbTrhy6Y1.jpg,', '0', '2023-02-09 11:24:09', '2023-02-09 18:51:34'),
(8, 1008, 'کاور لوکسار مدل Unicom مناسب برای گوشی موبایل سامسونگ Galaxy A02 / M02', 10, 'کاور لوکسار مدل Unicom یک قاب با محافظت حداکثری از گوشی موبایل میباشد که با وجود طراحی از کیسه هوا در چهار طرف گوشی از اسمارت فون شما در برابر ضربه محافظت خواهد کرد که دارای تست دراپ از ارتقاع 3 متر میباشد. این کاور با داشتن رنگ شفاف ،زیبایی اصلی گوشی را حفظ خواهد کردهمچنین دارای لبه بالاتر از صفحه نمایش است که جلوگیری موثری در عدم برخورد مستقیم صفحه نمایش با سطوح زمانی که صفحه نمایش را به صورت صاف روی اجسام و یا زمین قرار میدهید،همچنین این کاور به طور کامل دکمه های روی دستگا ...', 'color', 1, 20, 20, 20, 100, 1, 'products/1008/d5KcGcesZUPT7Z0AhaP6Cexo2d88ZauK8XUOk87s.jpg,products/1008/UewTI0DhraiS9DZroS6kN5E46Civgj5AXANxsF1o.jpg,products/1008/z0JX5HKIYcIOvizTG86D4XYcQjiVA7q6vBNuIuLy.jpg,products/1008/N0BfL4OFdLXeGPXWDm9XqA5U3dsmaPDiAvFhqMwu.jpg,products/1008/KojqSh4HqAvjGjpS8usOglsW0yHCYxNrO7zq8oCq.jpg,products/1008/SDJZRcsyCFKRakpWVRpH649yGoiF52cpfDxUXhok.jpg,products/1008/e37a3hnTb5nzBuRvSXD9KXl2zsRTqHakf5Uvwx8Z.jpg,', '0', '2023-02-09 11:26:27', '2023-02-09 11:26:27'),
(9, 1009, 'کاور ونزو مدل Dexter مناسب برای گوشی موبایل شیائومی Redmi Note 11 Pro 4G / Note 11 Pro 5G', 6, 'قاب ونزو مدل Dexter مناسب برای گوشی موبایل شما، با توجه به طراحی مهندسی شده احساس فوق‌العاده ای به وجود می آورد و با داشتن استانداد نظامی سقوط از ارتفاع 3 متر باعث محافظت کامل از گوشی همراه شما می شود. این قاب به گونه ای طراحی شده است که داری ویژگی مقاومت در برابر ضربه به صورت 360 درجه ، محافظ لنزهای دوربین می باشد. فروش بالا و همچنین رضایت کاربران این قاب در سال 2021 باعث شد که شرکت بزرگ ونزو تولید این قاب باکیفیت را در ظاهری شکیل تر در سال 2022 نیز ادامه بدهد. ویژگی منحصر ب ...', 'color', 1, 10, 10, 10, 100, 1, 'products/1009/WP0SQJVHreaqfRSjHIJpsbFNssTS27edv8KjxnIE.jpg,products/1009/yaGJfTN8eY7Suf3mh6IyhnCI9WXI8jlhq2468kZF.jpg,products/1009/mnhYf157QH0XxfV8yZK2dr7GVMl0TCXs6wbvRFG3.jpg,products/1009/KvhKIXaqqQSoa2nS0aDpZ5R7pNkevqgretvxqDG7.jpg,products/1009/sUaFExB5trvbfkrZOhBJk5I0phDfOg3Tbhpu3sSe.jpg,products/1009/5DuiYGcdV8plLuJHhxroC2jeg5glSqZA6q6Ad7dz.jpg,products/1009/39eKI81o68tDtg0zJgtuJdb3swehCDbtnnTyAo4o.jpg,', '0', '2023-02-09 11:28:38', '2023-02-09 11:28:38'),
(10, 1010, 'لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506LHB-HN323', 10, 'سری TUF لپ‌تاپ‌های ایسوس تا به‌ امروز توانسته‌اند با بهره بردن از مشخصات فنی مناسب، عملکرد بسیار خوب و قابل‌قبولی داشته باشند. در میان محصولات این سری، ایسوس سعی داشته تا برخی از لپ‌تاپ‌ها را با قیمت‌های اقتصادی‌تری روانه بازار کند. TUF Gaming F15 FX506LHB-HN323 یکی از لپ‌تاپ‌های مقرون‌به‌صرفه این شرکت است که از مشخصات فنی مناسب و قابل قبولی بهره برده است. این لپ‌تاپ دارای وزن 2.3 کیلوگرم و ضخامت 2.4 سانتی‌متر است. صفحه‌نمایش 15.6 اینچی این لپ‌تاپ با رزولوشن 1080×1920 پیکسل، ...', 'color', 1, 40, 40, 40, 400, 1, 'products/1010/0rp9z7nmFYjz505idn0GYJgg2rtmCMtNmGGoSTM9.jpg,products/1010/zHxUNTANgTITg6w4Hv4AsvXZSwPA1ylWPD0eLyjk.jpg,products/1010/xT15Ww5qCYzYqk1jmiavjOJKM73dfHeUNuYk8bqA.jpg,products/1010/ttoHuQGoTZ9vO3ksiNbcX2AM4yIsOyh5FVbyeX2g.jpg,products/1010/Zl9pDJl2TAAqUz3RQBLC1OEpg6FZWBZXgcgWdvbU.jpg,products/1010/KTSNPJAp0K8yZnrtLPQExZMUijMPGdIzYUJt7lSy.jpg,', '0', '2023-02-09 11:30:54', '2023-02-09 11:30:54'),
(11, 1011, 'لپ تاپ 15.6 اینچی ایسوس مدل TUF FX506HC-F15-153050', 6, 'سری TUF Gaming لپ تاپ‌های ایسوس، نسل قدرتمندی از لپ تاپ‌های گیمینگ است که طراحی ظاهری و سخت‌افزار قوی مخصوص‌بازی دارند و مقاومت و استحکام خوب، آن‌ها را جزو محصولات بادوام قرار داده است. لپ‌تاپ ایسوس TUF FX506HC-F15-153050 یکی از مدل‌های این سری است که قابلیت‌های فوق‌العاده‌ای به کاربر ارائه می‌کند.', 'color', 1, 40, 40, 40, 400, 1, 'products/1011/Xtpd3BjMRZ2uiaOiGbPtCtdq8n2eUC2JGjiWu81d.jpg,products/1011/ALuuEaPK4af4M4wxsL8ay7uTbi7cWMcxXEPsAWnH.jpg,products/1011/aoED3Ia1Mrf4j4w0zOZ8kUdjAszvNHtgUzVkvhcF.jpg,products/1011/iE1A8n7aqbYoD9jwDNm9hAo4nc5xPsT0fIlcyC5a.jpg,products/1011/a86wLJgfdK3WtJTwg5lhAL9CPhYK0eT13n0PLqED.jpg,products/1011/4Ugq9ww4KxOucBUN64uxtw391nZuhWWsGzRTG1Bu.jpg,products/1011/Vr5i9ctjOUbm4tcoaAgLau7P2CkdWYDlHhyltbZE.jpg,products/1011/ExT5oXMxxxWkb8m05N7gusXCbQIwD50VVwyXZ6xv.jpg,', '0', '2023-02-09 11:35:28', '2023-02-09 11:35:28'),
(12, 1012, 'لپ تاپ 13 اینچی اپل مدل MacBook Pro MYD82 2020 همراه با تاچ بار', 12, 'اپل در رویداد One More Thing خود از مک بوک پرو 2020 نیز رونمایی کرد. این مک بوک از صفحه نمایش 13 اینچی و پردازنده ویژه اپل به نام M1 و سیستم عاملmacOS Big Sur بهره می‌برد. این محصول همانند قبل با بدنه‌ی یکپارچه‌ی آلومینیومی، نمایشگر 13.3 اینچی رتینا با وضوح 1600× 2560 پیکسل و حاشیه‌‌های نسبتا باریک جزو چشم‌نوازترین اولترابوک‌های بازار به‌شمار می‌آید به گفته اپل این دستگاه نسبت به نسل قبل خود تا 3 برابر سریع ‌تر شده است. همچنین پردازنده گرافیکی هشت هسته‌ای M1 آن نیز 5 برابر س ...', 'color', 3, 40, 40, 40, 2000, 1, 'products/1012/27S9b9tkbMZolHSgVtGHlQScB9P7kY4JsGTKtRUm.jpg,products/1012/UIoKj02TIVajglJ35sXLB6Rzb6RzBBf2md3faoWY.jpg,products/1012/JDQWR636t7T4U0kFjqvwgPWnVRmcIweFhKqWZNOw.jpg,products/1012/7DoWrZmphO74eYdd2JB2RjyFmTQRjp4x84PfpVIb.jpg,products/1012/20GSaQaVkqudK0sa7L1VNhHd7zq33R4LAszAOUdH.jpg,', '0', '2023-02-09 11:37:16', '2023-02-09 11:37:16'),
(13, 1013, 'لپ تاپ 13.3 اینچی اپل مدل MacBook Pro M2 MNEJ3 2022', 12, 'لپ تاپ‌های شرکت اپل از دیرباز به عنوان یکی از پرفروش‌ترین محصولات این شرکت شناخته می‌شوند. این لپ تاپ‌ها بیشتر به دلیل کیفیت ساخت فوق‌العاده بالا و مشخصات سخت‌افزاری فوق‌العاده قدرتمند مورد استقبال قرار می‌گیرند. علاوه بر موارد ذکر شده، طراحی بسیار شیک و نازک بدنه‌ی این لپ تاپ‌ها به همراه جنس آلومینیومی آن‌ها از دیگر مواردی قلمداد می‌شوند که از همان لحظات ابتدایی می‌توانند نظر مثبت خریداران را به خود جلب کنند. یکی از جدیدترین لپ تاپ‌های شرکت اپل که مورد استقبال فراوانی هم قرا ...', 'color', 1, 40, 40, 40, 2000, 0, 'products/1013/TjKqTe38yKOVoDjGmbFZz0sG5az84VVUWd0p1tYp.jpg,products/1013/80cg2ktYzq3UhLQ7Nqrfg8795x6p64LlkFfM1ftE.jpg,products/1013/9IowmmRqxq5mAfJMOYGATNzOF6djJg8WKkaoH2nL.jpg,products/1013/PJNly8wVkCN6Z3cUIvhfSKFVhI8ym9b9ljJYeo2E.jpg,products/1013/FdU7FHMh7ApAPPLIROTuwL3HJ9wyLcmYCGRRufsB.jpg,', '0', '2023-02-09 11:39:09', '2023-02-09 16:57:47'),
(14, 1014, 'هدست مخصوص بازی ایسوس مدل ROG STRIX FUSION II 300', 6, 'دفترچه راهنما تبدیل TYPE-C به USB', 'color', 1, 30, 30, 30, 1500, 1, 'products/1014/cW07zEEALH701Bq4N1Uk3Ewce7Ag02o0VJeiCN7C.jpg,products/1014/pVQ8KGV1xZVWQAuFzcegxyeMEBZm0zuZLjScu9r4.jpg,products/1014/2aJNfahBmjvO4MpNZ4J1WMX3zL7F7sKrIl5LoBzF.jpg,products/1014/VEez5YLTmRwc0Mw0SrCEDxDL8HNDJ0iunsRS8mB9.jpg,', '0', '2023-02-09 11:40:58', '2023-02-09 11:40:58'),
(15, 1015, 'هدفون بی سیم بیرداینامیک مدل Aventho', 6, 'هدفون «بیرداینامیک» (Beyerdynamic) مدل «Aventho» طراحی بسیار زیبا را در کنار حمل ساده قرار داده است. بنابراین، برای استفاده بیرون از خانه بسیار مناسب است. طراحان این هدفون آن را به صورت تاشو طراحی کرده‌اند. از این رو کاربر می‌تواند کاپ‌های آن را به سمت بالا تا کند و به راحتی داخل کیف خود قرار دهد. ظاهر آن هم طراحی بسیار ساده‌ و شیکی دارد و ست کردن آن با لباس بسیار ساده خواهد بود. کاپ‌ها هم در Aventho بسیار نرم و لطیف هستند تا هنگام استفاده ی طولانی مدت هم گوش را خسته نکنند. ا ...', 'color', 1, 40, 40, 40, 1500, 1, 'products/1015/gzbpF99QbZuItSQVnuPxnbMZAYHD8zGJFcsqhuoj.jpg,products/1015/E7zcmjm2YhrleqCe9KJ3vJr85bpRL2cZbBzcnQbt.jpg,products/1015/pMsc3mVzJwNp0KCFMJfLLT4rB9e2hqojPV4PAjv0.jpg,products/1015/ngVocpK67lC5ncUlNDDO2hx0R3qYgyeTUCDvuZHJ.jpg,products/1015/pVSgNtVw7NJROgBs0FNrWUXqq2sPq2Um1wJCs6mf.jpg,products/1015/car1rNpUjsGX9BlKWFMF2hL4SHFAZeB5mEN65ojC.jpg,products/1015/i8MS5PwiHLlE2iuN5NKTJCw2J2taoUext0BRBKDH.jpg,', '0', '2023-02-09 11:44:46', '2023-02-09 11:44:46'),
(16, 1016, 'هدفون بی سیم بیرداینامیک مدل AMIRON WIRELESS COPPER', 6, 'هدفون مدل Amiron Wireless Cooper کمپانی بیرداینامیک آلمان با ظاهر و صدای خارق العاده و جزئیات جدید مسی، زیبایی هدفون Amiron Wireless را دوچندان کرده است. سیم پیچ های صوتی ظریف (در کپسول هدفون) که قلب هدفون¬ها را تشکیل می دهند الهام بخش طراحی بی نظیر Copper است. بدست هنرمند و توانای طراحان و متخصصین آلمانی شرکت بیرداینامیک، جاذبه ظاهر این فلز نفیس با رنگ تیره هدفون ترکیب شده چنانکه زیبائی خطوط تزئینی مسی روی کاسه هدفون، روی هدبند و شماره سریال، مضاف بر همه شاخص های بالای فنی، ...', 'color', 1, 30, 30, 30, 1600, 1, 'products/1016/sFH9pqcM8PdINKcjfmuhjCo0eQX115s1jViiB5dS.jpg,products/1016/J8cUbQLmVOyZ1VZkert3pubYgbI0fonEbho8ZAcC.jpg,products/1016/zvTYX0mWmJpmkcIFL1mtoPJfs53GSGPFVvIdeS5I.jpg,products/1016/wkbZ8IuUZ12ySCj7ZAhtWQTWgYMmyhfueVEfwCFD.jpg,products/1016/hpakQfyTH9ts4rGGi99bOlAixvT0xjnfHSqTzHbJ.jpg,products/1016/xjZXt0I6rsq0buB8YxXXWjdB0F37iZl7bphNij57.jpg,', '0', '2023-02-09 11:47:17', '2023-02-09 16:42:17'),
(17, 1017, 'پاوربانک ریمکس مدل RPP-199 ظرفیت 30000 میلی آمپر ساعت', 11, 'درخواست مرجوع کردن کالا در گروه پاوربانک (شارژر همراه) با دلیل \"انصراف از خرید\" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).', 'color', 1, 30, 30, 30, 1500, 1, 'products/1017/9L7IOmRb2SIvNpouxLuUPUQroxf7VncrLFwPhTlM.jpg,products/1017/S6wB1dYnGsrv2IX1snKMajdJJ6EJ4mK0qNDdrLop.jpg,products/1017/HrJM3inn6P4bCFZ4mNXsuNn9QTR4swjsUid3HuK7.jpg,products/1017/dqfxXruUHcBNP1LPVHGYjobnUzAgLP7wkx63stEy.jpg,products/1017/FTsszdktGFOdvgBzdlcgQetYmbTvX6YadMOEc9XL.jpg,', '0', '2023-02-09 11:49:47', '2023-02-09 11:49:56'),
(18, 1018, 'شارژر همراه دبلیو یو دبلیو مدل Y101 ظرفیت 10000 میلی آمپر ساعت', 10, 'پاور بانک مدل Y101 با ظرفیت 10000 میلی‌ آمپر ساعت از برند wuw می باشد. که با سرعت بالا و توان 22.5 وات تمام دستگاه های هوشمند شما را شارژ می کند و دغدغه های دنیای امروز از جمله عدم دسترسی به برق و قطعی آن را برطرف می کند و می توانید به کمک این دستگاه انرژی الکتریکی وسایل شما مانند گوشی را در هر شرایطی تامین می کند. این محصول با وزن سبک به شما امکان حمل راحتر را می دهد و می توانید آن را در هر مکانی ببرید. این محصول مزیت شارژ همزمان سه دستگاه هوشمند را با استفاده از درگاه های T ...', 'color', 1, 20, 20, 20, 20, 0, 'products/1018/h6zfKnEZrJIn1e2ZrOIMhk1hvQZopZDOC4eEXteL.jpg,products/1018/f9ztnmvedplamiXIbszWOpcPzvR0Z4GrulXC3HYA.jpg,', '0', '2023-02-09 11:51:26', '2023-02-09 16:57:43'),
(19, 1019, 'شارژر همراه اکو مدل E10000 ظرفیت 10000 میلی آمپر', 11, 'پاور بانک ECHO مدل E10000 به همراه 2 کابلTYPE-C و لایتنینگ) متصل به بدنه شما رو بی نیاز از کابل می کند، علاوه بر کابل های متصل به پاور در این محصول یک درگاه خروجی در نظر گرفته شده است که شدت‌ جریان خروجی در آن 2 آمپر است و دیگری Type-C است و می‌توانید با شارژر مناسب ترجیحاً 3 آمپر و بیشتر این پاوربانک را شارژر کنید و یا حتی توسط کابل تایپ سی از این درگاه گوشی خودرا شارژ کنید. این محصول با انواع گجت‌های هوشمند مثل دوربین، تبلت، گوشی سازگار است. بر روی بدنه پاوربانک نشانگرهای L ...', 'color', 1, 35, 35, 35, 1200, 1, 'products/1019/1de6DYLbDMvbBbbBjgkKOnDWuNe1ryZ4Y793CqwT.jpg,products/1019/BQSi4g4W6Iyv3kH1cFnTVyN4XINnkQYLIXjxFEpO.jpg,products/1019/7cVEF19CDMiA9wE4Lf2zlssdnTnmDI2mgw5G2tbF.jpg,products/1019/0Ewczd1feV9KELKo3vWIMpp8kTQePFdd8Iau8trA.jpg,', '0', '2023-02-09 11:53:08', '2023-02-09 11:53:08'),
(20, 1020, 'نان سوخاری گندم نان آوران مقدار 200 گرم', 5, 'خورد شده بود بخاطر بسته بندی نامناسب', 'null', 1, 30, 30, 30, 1000, 1, 'products/1020/xQXMmw6kBEwsHvSbCJcLnRFhOP0IvhM1ym9NX6tv.jpg,products/1020/Z4eyPt92KAjBvP26hyDBNvOExS6xHuzkDPHaCYkC.jpg,products/1020/1OA1bSLN6Sw4koVTMBWsGQ4EjzMf8AGm3fXnmDo5.jpg,products/1020/0VrK62BxYOcMvzdewvm3XVvvyaFf973DtlEBxHwC.jpg,products/1020/zKBrhVv5O2naRPldBIR4aUZ3oIY4ngpc9Ux1amFO.jpg,', '0', '2023-02-09 11:55:11', '2023-02-09 11:55:11'),
(21, 1021, 'تست غلات نان آوران مقدار 500 گرم', 5, 'نان با تاریخ تولید 4 و نیم روز پیش!', 'null', 1, 20, 20, 20, 20, 1, 'products/1021/Ym5K0XVTK9J0cHIKVXaO2K5cifG6nQ8Kp4j0KbhT.jpg,products/1021/CscU15RaMvVgrMHCsi3zeB4MsFmobJ4MPaZwnrjx.jpg,products/1021/OOhNqlBWtXuRFB8PxRbSUQ9gVdvBi42KGAdWK9nz.jpg,products/1021/AaGw8bKslIJCFAZ5JwFKkVd0eZgApCTuaUNYevoY.jpg,products/1021/x3dwLC6LPTgikuqskDa6TEozSbQ4c68EWhlwPGop.jpg,products/1021/PICJouEmpkwuOONV1lV50jMVDdtvtGTNDLomUnIx.jpg,products/1021/nA6fAlCczP9FXUrZssO62OiIFGQZyFK3alVIdkxr.jpg,', '0', '2023-02-09 11:57:05', '2023-02-09 11:57:05'),
(22, 1022, 'ساعت مچی عقربه ای زنانه موادو مدل 0607064', 8, 'عال بود و مثل همیشه خوشگل', 'null', 1, 20, 20, 20, 1000, 1, 'products/1022/3TdrUoFP163wCJyaAyN7xXDkmLqB8bVyzL02OZOX.jpg,products/1022/FjV65kt2O8AvkdY8zCAUDEe2cuexHlwXDZbrwcSa.jpg,products/1022/MybPzRw3yaOt3IT5q219T3pIZMSMTFXcdZy0KbXC.jpg,', '0', '2023-02-09 12:04:28', '2023-02-09 12:04:28'),
(23, 1023, 'ساعت مچی عقربه ای یونگ هانس مدل 27400704 MAX BILL Automatic', 11, 'یونگهانس | Junghans چندی پیش با یکی از برندهای مطرح دنیای ساعت از کشور آلمان آشنا شدیم. یونگ هانس برندی که شهرتش را مدیون محصولاتی ساده و بسیار باکیفیت است، طرفداران خاص خود را دارد. آنچه که به عنوان زبان طراحی در محصولات یونگ هانس قابل درک بود بهانه ای شد تا یک آلمانی مشهور دیگر را برای معرفی انتخاب کنیم. یونگ هانس می تواند بیانگر زبان طراحی آلمانی در بازار ساعت باشد.', 'null', 3, 30, 30, 30, 500, 0, 'products/1023/67gKXHR1wk5nhtax6uVa8wPbz1UnfuJD3FGSDjny.jpg,products/1023/wxH6JFLMe9zjFRtkef5ac7i1bAu3NTLpFsWHWRQq.jpg,products/1023/80aWJcZxmi9WCIAZKiyTQsv9DRhEvFLmsQ3QGy3A.jpg,products/1023/RdsY4EOLjXU1UWHSJv6rseWmayAvpfNRxfFV6fQa.jpg,products/1023/TudmpidJlWfY3LNnNsAfUPCiLefhYJNEnKkbjEAc.jpg,', '0', '2023-02-09 12:06:19', '2023-02-09 16:57:41'),
(24, 1024, 'کفش پیاده روی مردانه واریور مدل 0169', 11, 'کفش خوبیه. سایزش درست بود. یه کم فقط باید بگذره تا پا توش راحت باشه', 'size', 1, 40, 40, 40, 400, 1, 'products/1024/80Bc6ypfUURocQZexzpNv1NiXSaTWzNsOrxf78bf.jpg,products/1024/VCZFkJZPWu8YnSm9gsuypft9yao1XKZyotR3aDkT.jpg,products/1024/2TiQAhnCaBo9DAMXBEVjHUEOkJZeTDADjnJRguPQ.jpg,products/1024/4PkQB1KcH5yPHw9QnA8dBBjBlX37BIok5hNWbEoE.jpg,products/1024/NoeOtAyAxBwICk3gEMwR4bjUqyeenwkfcMYKL9nC.jpg,products/1024/igeOFwA3wGFQmhUNnFLJHkH4QdWfRj5vyb1rahYO.jpg,products/1024/4PkERxMI0qiQ0y3kBTOolDOREvYt908Q910b09CS.jpg,products/1024/CJJNSgrZ31kh2LeDfYO0VZJKwFVUnHGcoExoU1ZP.jpg,', '0', '2023-02-09 12:09:03', '2023-02-09 12:09:03'),
(25, 1025, 'نیم بوت مردانه واریور مدل 1758G', 8, 'خیلی جنسش خوبه', 'size', 1, 40, 40, 40, 400, 1, 'products/1025/MUNgGR8cW5j2sSCut73YWdL4cBOKP1ATIgypRnmj.jpg,products/1025/KzEDsZoT8tK9auIvTvvHZqoG6n1ZUa5gSMGmDeSt.jpg,products/1025/pIJnqPqxUzd2jqT6QZiNQ1qeJujMOJwia1xwSZ6u.jpg,products/1025/GFNewTAHCP7SlyovcFg9IyWyldXfRU9aoPaf8XOq.jpg,products/1025/TKgGUpaPlysuKopoi70aVM5AZOXV5Y7XOa9Wu8Ki.jpg,products/1025/1WWFxFZOfWYAvHpWJURkAyNCQWJlo29NNJPP3bLV.jpg,products/1025/l28ydb0C7svt88rzaRWgBorKOi58HT7piy0QalH4.jpg,products/1025/4DOh7RiQYKtFyTOKbm9ZJQOCwZPmZsaym34pNLL0.jpg,products/1025/MvlvZtHd8fTTwMWRsdv5G2jnLCmRYPNv52cMBdHb.jpg,products/1025/94V2hdCsdrTzbnTEhyMdirzaboJfG7M9IkAkCtTS.jpg,', '0', '2023-02-09 12:11:20', '2023-02-09 12:11:20'),
(26, 1026, 'سوییشرت مردانه جک اند جونز کد h2005', 11, 'اگر این محصول را قبلا از دیجیکالا خریده باشید، دیدگاه شما به عنوان خریدار ثبت خواهد شد. همچنین در صورت تمایل می‌توانید به صورت ناشناس نیز دیدگاه خود را ثبت کنید', 'size', 1, 20, 20, 20, 1000, 1, 'products/1026/jwbjfXXnjxvu21XWU3PZTGk9EqKUh3R6cxjzCj21.jpg,products/1026/KRcsLPBVp1NlwrUTcJsvvmNW0fPon0nX6HkfSFWX.jpg,products/1026/FAdFHpYP4HEvlY9utpiFR4BqveEKJO3SzDK1sLy0.jpg,products/1026/9hciQMb7EDvVyaIx5cicEFgE99H8Eui1NiOUzKe1.jpg,products/1026/H8BwEhXUW7TMsiJNfuShitEti9WINiOxB3qEgxmm.jpg,products/1026/0jdpPBI6VDgHAUtWFc7JAjlKUfvXkF45KcgAsvJT.jpg,', '0', '2023-02-09 12:15:48', '2023-02-09 12:15:48'),
(27, 1027, 'سویشرت مردانه اچ اند ام مدل AJ0424', 8, 'سویشرت مردانه H&M با رنگ جذاب و کیفیت جنس فوق العاده عالی گزینه بسیار مناسبی برای پاییز و زمستان می باشد. دور یقه و سرآستین ها و انتهای لباس کشبافت می باشد. این سویشرت از جنس دورس با کیفیت می باشد و Standard Fit می باشد.', 'size', 1, 30, 30, 30, 500, 1, 'products/1027/WczOPzERAJRpNvoFBiHwNamkQjpbToncZfnXoJYs.jpg,products/1027/aRYFHypLxb2rZoxb5cp5pv2FlUhOeaRRgU96Un8E.jpg,products/1027/peXzrNSz4CnQfwswts3S1GKMii3mpCtPMdJeIOFo.jpg,products/1027/nNIhXlAmGOF28HzAdB7qkqUKfYGuRGiTP6AT9wTA.jpg,', '0', '2023-02-09 12:17:26', '2023-02-09 12:17:26'),
(28, 1028, 'عسل طبیعی آذرکندو - 1 کیلوگرم', 5, 'در اصل بودن این عسل تردید دارم. به هر حال خریداری کردم.', 'Weight', 1, 20, 20, 20, 300, 1, 'products/1028/hmKusxogawDYKdq2Bk5VZE62yog87wAjjPzbR8df.jpg,products/1028/zFmdisc5mFVlz0r1dk1xI3VWsyWkhSUGDqgemOZ2.jpg,products/1028/xWL2wZj3Xcg6LxW2AKTxFedxbInTcB5NP9xAxa2F.jpg,products/1028/jkhrO4Lkx8v5Nsyy0TTkTLoh1lTFrDW2ztR46iMA.jpg,', '0', '2023-02-09 12:20:19', '2023-02-09 12:20:19'),
(29, 1029, 'عسل گون ارگانیک اورازان - 960 گرم', 5, 'عسل از قدیمی ترین و نخستین شیرین کننده هایی است که انسان استفاده کرده است و شامل قندهایی چون گلوکز، فروکتوز، مواد معدنی همچون منیزیم، پتاسیم، کلسیم، کلریدسدیم، گوگرد، آهن و فسفات است. در ضمن اینکه ویتامین هایی همچون B1 ، B2 ، B6 ، B3 ، B5 و C نیز براساس کیفیت و نوع عسل به نسبت های متفاوت در آن دیده می شود. در این بین عسل گون از محبوبیت خاصی میان عسل‌ها برخوردار است. گون نوعی گیاه دارویی است که ریشه آن برای درست کردن دارو مورد استفاده قرار می‌گیرد. شهد جمع‌آوری شده گل‌های گیاه گون توسط زنبوران عسل علاوه بر خواص عمومی عسل دارای ویژگی‌های منحصر بفرد دیگری است که وجه تمایز آن نسبت به عسل‌های دیگر شده است. گون به دلیل تاثیرات بسیار مثبتی که بر روی سیستم ایمنی بدن می گذارد معروف است. عسل گون کاملا زرد رنگ بوده و ظاهر آن شبیه عسل‌های معمولی است که برای صبحانه میل می‌کنید.', 'Weight', 1, 20, 20, 20, 200, 1, 'products/1029/Y4CfEopvR7ai3mvOfDh4A5C1dNjrGv7TzAeJIXE4.jpg,products/1029/jxitjnWVqj5Kh4YskfzPSw46qLHlnd1N4LE8SyBA.jpg,products/1029/rYbND8wdZheZUQ7X1bkat21z2tKYxVmrQAcvB6sQ.jpg,products/1029/WBmqWgtluIYXMEu3MXKcFvfRgUfA31MmR61pyjDb.jpg,products/1029/77TAWuUsnobbIe3cuIoNqS2u8IlcXv0cfdUanAz6.jpg,', '0', '2023-02-09 12:21:58', '2023-02-09 12:21:58'),
(30, 1030, 'مربا هویج بامیکا - 200 گرم', 1, 'کیفیتش خوب بود اما درب مربا شکسته بود وقتیمه از تو بسته بندی باز کردم اعصاب بهم ریخته شد', 'null', 1, 20, 20, 20, 200, 1, 'products/1030/1v8rKtAmKlremaQDGHMfCeLc6uFvwGMvBOw1dPzp.jpg,products/1030/0lQcGq2w3BxlGPqvP4EPKEtxFZQfjqX1ZjAVhVH3.jpg,products/1030/22eQNWXMovBRjtPAbrSev56BKZvn2B8xFiqWNGME.jpg,', '0', '2023-02-09 12:23:28', '2023-02-09 12:23:28'),
(31, 1031, 'مربا آلبالو اصالت - 310 گرم', 1, 'بدون شک مربا یکی از محصولات غذایی محبوب بر سر میز صبحانه و عصرانه است. مرباها از جمله خوراکی‌هایی هستند که در تمام دنیا مصرف می‌شوند و تهیه‌ی مربا یکی از روش‌های قدیمی برای حفظ و نگهداری موادغذایی بوده است. مربای آلبالو بسیار پرطرفدار است. ترکیب دو طعم متضاد ترش و شیرین بسیار دلچسب است و بچه‌ها عاشق این طعم هستند. همچنین آلبالو دارای خواص آنتی‌اکسیدان است که بدن شما را در مقابل بسیاری از بیماری‌ها ایمن می‌سازد. آلبالو از میوه‌ها ...', 'null', 1, 20, 20, 20, 1200, 1, 'products/1031/WTSuTyGaeVHREpy7e768aFVL2LCj3iSqczrc7WxZ.jpg,products/1031/NQht34OhqD5D9TVZFDPO00r2pYrd7pZkuBuEHyAC.jpg,products/1031/a3BSr3NOajtWpngydOGleuFrdDDrh9QXb5Xb09Bo.jpg,products/1031/7U9hve68HfkGfCEh7DhtSKFrWjvxz9Te8hmzxdQm.jpg,products/1031/GVQXsat2qraX0HqlexCOUmSGj3kuewb02H6egXO0.jpg,', '0', '2023-02-09 12:26:45', '2023-02-09 12:26:45'),
(32, 1032, 'قند شکسته ممتاز یزد با طعم هل و گلاب دلوین - 600 گرم', 2, 'روش تولید قند کله شکسته ممتاز یزد دلوین: شهر یزد یکی از برترین شهرها در زمینه تولید انواع قند می باشد و قند سنتی یزد از معروف ترین قندها است که در میان ایرانیان طرفداران بسیاری دارد، قند دلوین سال های زیادی است که با تلفیق روشهای سنتی و مدرن در استان یزد مشغول به فعالیت می باشد، قند دلوین بدون افزودن بلانکیت و یا هر نوع مواد افزودنی دیگر تولید می گردد. قند دلوین فقط و فقط با فیلتر کردن (یازده مرحله ای) محلول آب شکر و پخت در محیط خلاء با درجه حرارت پایین (حدود 80 درجه سانت ...', 'Weight', 1, 20, 20, 20, 2000, 1, 'products/1032/9YeOMw1J1P0zS9oUKPuYTlLW0ysnYp2WeFnyeyTD.jpg,products/1032/M7yLNL4Mi1E69i1OvhpVPdhJwEw5mdHmlihYARHC.jpg,products/1032/KgZWPhe1CEXhwQRbz2vD0oKJlvBIlcqXEdYKRLaF.jpg,products/1032/JomIWhtbDsJxb8giP5sGyuS7a320dn4y9BHOrIcX.jpg,products/1032/qLlgVyChvATFy8aHwglv7lnUoH7BpUofb3Lx8kR7.jpg,products/1032/371PY32laKm0KErPOe2stKqBzx84DCZrAJFipuOr.jpg,', '0', '2023-02-09 12:28:40', '2023-02-09 12:28:40'),
(33, 1033, 'روغن گیاهی نیمه جامد غنچه - 4 کیلوگرم', 5, 'ممنون ازدیجیکالا', 'null', 1, 50, 50, 50, 5000, 1, 'products/1033/hgW4IDqEJe2aGam2i5NmMKH6xP5E232ykbHJobbK.jpg,products/1033/tEUVTn5suHcJlocJA2Q1f2soHFG7251PoWegXtvg.jpg,products/1033/BNQHeGjd8fAcBpqf7VkEKCecCdU73m2bbXVsS1JC.jpg,', '0', '2023-02-09 12:30:11', '2023-02-09 16:57:33'),
(34, 1034, 'روغن سرخ کردنی حاوی روغن زیتون دلوین - 1800 میلی لیتر', 5, 'سرخ کردن غذا یکی از قدیمی ترین و پرطرفدارترین روش های پخت غذا به شمار می رود، غذاهای سرخ شده با داشتن طعم خوب، رنگ و بافت تردی که دارند از محبوبیت بیشتری در مقایسه با غذاهای بخارپز و آب‌پز برخوردارند. به طور کلی سرخ کردن به فرآیند قرار دادن غذا در روغن داغ در تماس با هوا و رطوبت با دمای حدود 150 تا 190 درجه سانتی گراد گفته می شود. روغنها، عامل انتقال حرارت به غذا و ایجاد بافت و طعم دلپذیر غذاهای سرخ شده می باشند. البته این شرایط منجر به افزایش سرعت اکسیداسیون و فساد روغن می ش ...', 'null', 1, 50, 50, 50, 500, 1, 'products/1034/4NIRIm74kx1mEWCfL2HA9TzHZ0Pry2UgkrNlYGB7.jpg,products/1034/M5ipaPzKWmOeGzH7YbJTxtViDJELy0JciNfNA8gB.jpg,products/1034/vLJw0iaWMrBjjnjR3bN4ZiBRSK8S8t3oBdKDN5Wm.jpg,products/1034/6jgSUzoySNEhvI7H1gW7NQjQQRFPwy3O8RkYkBay.jpg,products/1034/zYdFKl8MFqAXj5vR2K3vGhJW8s0plgky1h10JRdg.jpg,products/1034/bj3XzrjYeiZEdocvDY8OXeMbHjMQWa08KlczG8n4.jpg,products/1034/CIwVKWet1cz5EcpHG5ET7jnpy7EIo2fW8uQTAjOI.jpg,products/1034/M0qoaBqEw86neK7TB7C2G39r0USqMOq28hh7Qbfb.jpg,', '0', '2023-02-09 12:31:53', '2023-02-24 13:15:59');

-- --------------------------------------------------------

--
-- Table structure for table `seller_requests`
--

CREATE TABLE `seller_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `seller_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `subject` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `about` varchar(1500) NOT NULL,
  `file` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seller_requests`
--

INSERT INTO `seller_requests` (`id`, `seller_id`, `product_id`, `subject`, `name`, `about`, `file`, `created_at`, `updated_at`) VALUES
(2, 2, 0, 'افزودن دسته', 'گروه خیلی جدید', '0', '0', '2023-02-15 06:15:44', '2023-02-15 06:15:44'),
(3, 1, 0, 'افزودن برند', 'برند جدید', 'عالیه', 'seller_request/brand/aPTYpGEBJJYDsKiMm3lH3bHVAi8atJu1qPFcgHB5.png', '2023-02-15 06:29:27', '2023-02-15 06:29:27'),
(4, 2, 0, 'افزودن گارانتی', 'گارانتی جدید 6 ماهه', '0', 'seller_request/warranty/jLkFoBh38WLQSCNINQ1GNrAvznYR9XYQXJlqlows.jpg', '2023-02-15 06:50:11', '2023-02-15 06:50:11'),
(5, 3, 34, 'افزودن عکس', '0', '0', 'seller_request/addPic/Ta6BCg0MFUGxpPXJNKDzIzheZ9PV309mcOvK2Pmq.jpg', '2023-02-15 07:21:46', '2023-02-15 07:21:46'),
(6, 2, 0, 'افزودن رنگ', 'بنفش', '0', '0', '2023-02-15 09:57:00', '2023-02-15 09:57:00');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `size` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `size`, `created_at`, `updated_at`) VALUES
(1, 'xl', '2023-01-22 16:52:03', '2023-01-22 16:52:03'),
(2, 'خردسال', '2023-01-22 16:52:13', '2023-01-22 16:52:13'),
(3, 'بزرگسال', '2023-01-22 16:52:21', '2023-01-22 16:52:21'),
(4, 'L', '2023-01-22 16:52:32', '2023-01-22 16:52:32'),
(5, 'small', '2023-01-22 16:52:40', '2023-01-22 16:52:40'),
(6, 'mediom', '2023-01-22 16:52:45', '2023-01-22 16:52:45'),
(7, 'xxl', '2023-02-13 11:19:16', '2023-02-13 11:19:16'),
(8, '42', '2023-02-13 11:24:50', '2023-02-13 11:24:50'),
(9, '41', '2023-02-13 11:24:53', '2023-02-13 11:24:53');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'slid0.png',
  `group_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `image`, `group_id`, `created_at`, `updated_at`) VALUES
(1, 'slider/QR6CBWa10Wm0LaW7sWot4Kc2H4EfFMT2RQYBkwHL.jpg', 2, '2023-01-22 16:45:48', '2023-01-22 16:45:48'),
(2, 'slider/e9zyASOsA78z7rxNHB1c2Da9POW8jyXlYHokqiPh.jpg', 8, '2023-01-22 16:45:55', '2023-01-22 16:45:55'),
(3, 'slider/d0JERXaSIkYB7BWQWyaHho6AmJB7tmYJOc7Xvw34.jpg', 10, '2023-01-22 16:46:02', '2023-01-22 16:46:02'),
(4, 'slider/EfvkxwHHOHNmll8td7HGeU4JPZrNBoQ8uvvL8UM7.jpg', 6, '2023-01-22 16:46:16', '2023-01-22 16:46:16'),
(8, 'home/slider/8uXiFLW9iHIJ7OBIyJ0EQL41UBN6iEh9lXF5NWlL.jpg', 29, '2023-02-06 08:38:49', '2023-02-06 08:38:49'),
(9, 'home/slider/RGyWObkDCKuofeeRYRQZ1qiLhVIWX6W0CQr9Smv6.jpg', 1, '2023-02-06 13:59:42', '2023-02-06 13:59:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `active` int(11) NOT NULL DEFAULT 0,
  `seller_name` varchar(50) DEFAULT NULL,
  `address` varchar(1500) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `isSeller` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `role` enum('normal','backing','manager','developer') NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `active`, `seller_name`, `address`, `phone`, `isSeller`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'میلاد', 'milad@gmail.com', NULL, '$2y$10$icqM3HiVXJk2YZngNh92tOoE64yVsEQCTEgK.ls5lmskVKdrTUdta', 0, 'فروشگاه میلاد', 'البرز - کرج - کمالشهر', '09190790801', 1, 'developer', NULL, '2023-01-22 16:27:46', '2023-03-08 05:17:18'),
(2, 'احسان', 'ehsan@gmail.com', NULL, '$2y$10$hQBeq5bfutZmJnIrGoR2/OnosWQhiUik7zFturAaVrQx90PenhzEO', 0, 'فروشگاه احسان', 'تهران - شهرری', '09192356894', 1, 'normal', 'zah2xWAfb71vvyHyMaNe4WBl6RTc7d935XyQrixIU9bOnNXWa6kFVFMKSEl5', '2023-01-27 12:23:38', '2023-02-17 05:54:54'),
(3, 'علی', 'ali@gmail.com', NULL, '$2y$10$seZq8x7t.cM0nvjTNqhji.ucViuxIQQjcun2Zr7cbHFx2M5yI6TMC', 0, 'فروشگاه علی', 'گیلان - لاهیجان', '09115648975', 1, 'normal', NULL, '2023-01-27 12:24:11', '2023-03-08 05:22:18'),
(4, 'محمد', 'mohammad@gmail.com', NULL, '$2y$10$DcJ0.oGLRoz06SpV44Xb8OR6EEoywKoKnBznPuMa8D3SzTg8izK.O', 0, NULL, NULL, NULL, 0, 'normal', NULL, '2023-01-30 10:07:18', '2023-03-08 05:22:22'),
(5, 'محسن', 'hasan@gmail.com', NULL, '$2y$10$SwyN8iSm0b4FWwyPb04jWu.kET.v.ARI0hQz300LR4qfOhZ4nWXeW', 0, NULL, NULL, NULL, 0, 'normal', NULL, '2023-01-30 10:18:11', '2023-01-30 10:18:11'),
(6, 'زهرا', 'zahra@gmail.com', NULL, '$2y$10$7N51OOCiCYXMBIIcjbybnOSCEyNsA06ZVG0MCQCkj7VQokQ3tCQSa', 0, NULL, NULL, NULL, 0, 'normal', NULL, '2023-01-30 10:25:04', '2023-01-30 10:25:04'),
(7, 'حسین', 'hoseyn@gmail.com', NULL, '$2y$10$3PT1juAHWpCxrXnv2gP9YeDVSm4GmeE6Vz4qJQhGdvtCM8Qf76fAW', 0, NULL, NULL, NULL, 0, 'normal', NULL, '2023-01-30 10:33:13', '2023-02-13 07:46:47'),
(8, 'امیر', 'amir@gmail.com', NULL, '$2y$10$pkvJHR8ruUxmHp1Xb1rT3OluuQ8/lQ3UNYC/VJ4IN5BnAIOLmM.qm', 0, NULL, NULL, NULL, 0, 'normal', NULL, '2023-04-20 15:26:33', '2023-04-20 15:26:33'),
(9, 'سعید', 'saeed@gmail.com', NULL, '$2y$10$gPAR3KaTVBgTmg.G.sKVgehm7JPTSItCUjou3nlhgUFbBUPKa6IYe', 0, NULL, NULL, NULL, 0, 'normal', NULL, '2023-04-20 16:10:20', '2023-04-20 16:10:20');

-- --------------------------------------------------------

--
-- Table structure for table `varieties`
--

CREATE TABLE `varieties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dkpc` bigint(20) UNSIGNED NOT NULL,
  `dkp` bigint(20) UNSIGNED NOT NULL,
  `variety` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `category_list` varchar(255) NOT NULL,
  `shipping_time` enum('1','2','3','4','5') NOT NULL,
  `access` int(11) NOT NULL,
  `remain` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `price_off` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `reserve_num` int(11) NOT NULL,
  `active` int(11) NOT NULL DEFAULT 0,
  `special` int(11) NOT NULL DEFAULT 0,
  `moreSell` int(11) NOT NULL DEFAULT 0,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `Warranty` bigint(20) UNSIGNED NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `varieties`
--

INSERT INTO `varieties` (`id`, `dkpc`, `dkp`, `variety`, `category_list`, `shipping_time`, `access`, `remain`, `price`, `price_off`, `number`, `reserve_num`, `active`, `special`, `moreSell`, `user_id`, `Warranty`, `brand_id`, `created_at`, `updated_at`) VALUES
(1, 10000, 2, 'آبی\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,کیف و کاور گوشی', '2', 1, 5, 3250000, 3250000, 5, 0, 1, 1, 1, 1, 7, 7, '2023-02-08 20:49:42', '2023-02-08 20:49:42'),
(2, 10001, 2, 'زرد\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,کیف و کاور گوشی', '1', 1, 1, 2900000, 2590000, 3, 2, 1, 1, 1, 1, 7, 7, '2023-02-08 20:51:34', '2023-02-12 18:10:30'),
(3, 10002, 1, 'A\n', 'کالای دیجیتال,لپتاپ', '5', 1, 5, 520000000, 495000000, 6, 1, 1, 1, 1, 1, 6, 12, '2023-02-09 07:53:04', '2023-02-09 07:56:36'),
(4, 10003, 34, 'A\n', 'کالاهای سوپرمارکتی,کالاهای اساسی و خوارو بار,روغن', '2', 1, 30, 590000, 550000, 30, 0, 1, 0, 1, 1, 7, 5, '2023-02-09 12:35:06', '2023-02-09 12:35:06'),
(5, 10004, 33, 'A\n', 'کالاهای سوپرمارکتی,کالاهای اساسی و خوارو بار,روغن', '1', 1, 6, 990000, 850000, 6, 0, 1, 1, 1, 2, 7, 5, '2023-02-09 12:43:36', '2023-02-09 12:43:36'),
(6, 10005, 32, '5kg\n', 'کالاهای سوپرمارکتی,کالاهای اساسی و خوارو بار,قند', '3', 1, 5, 1500000, 1390000, 5, 0, 1, 1, 0, 1, 7, 2, '2023-02-09 12:44:30', '2023-02-09 12:44:30'),
(7, 10006, 32, '3kg\n', 'کالاهای سوپرمارکتی,کالاهای اساسی و خوارو بار,قند', '4', 1, 0, 990000, 890000, 0, 0, 1, 1, 1, 3, 7, 2, '2023-02-09 12:44:56', '2023-02-09 12:44:56'),
(8, 10007, 31, 'A\n', 'کالاهای سوپرمارکتی,صبحانه,عسل', '1', 1, 20, 250000, 229000, 20, 0, 0, 1, 1, 1, 7, 1, '2023-02-09 12:45:46', '2023-02-11 07:18:26'),
(9, 10008, 30, 'A\n', 'کالاهای سوپرمارکتی,صبحانه,مربا', '2', 1, 7, 590000, 490000, 7, 0, 1, 1, 1, 2, 7, 1, '2023-02-09 12:46:34', '2023-02-09 12:46:34'),
(10, 10009, 29, '1kg\n', 'کالاهای سوپرمارکتی,صبحانه,مربا', '2', 1, 2, 680000, 550000, 2, 0, 1, 1, 0, 1, 7, 5, '2023-02-09 12:47:14', '2023-02-09 12:47:14'),
(11, 10010, 29, '5kg\n', 'کالاهای سوپرمارکتی,صبحانه,مربا', '1', 1, 1, 890000, 750000, 1, 0, 1, 0, 0, 1, 7, 5, '2023-02-09 12:47:33', '2023-02-09 12:47:33'),
(12, 10011, 28, '2kg\n', 'کالاهای سوپرمارکتی,صبحانه,مربا', '2', 1, 2, 650000, 590000, 2, 0, 1, 1, 1, 3, 7, 5, '2023-02-09 12:49:06', '2023-02-09 12:49:06'),
(13, 10012, 27, 'xl\n', 'مد و پوشاک,مردانه,لباس مردانه,سوییشرت و هودی مردانه', '5', 1, 5, 15900000, 13900000, 5, 0, 1, 0, 1, 1, 7, 8, '2023-02-09 12:49:44', '2023-02-09 12:49:44'),
(14, 10013, 27, 'L\n', 'مد و پوشاک,مردانه,لباس مردانه,سوییشرت و هودی مردانه', '2', 1, 5, 14500000, 13500000, 6, 1, 1, 1, 1, 3, 7, 8, '2023-02-09 12:50:01', '2023-02-11 19:43:04'),
(15, 10014, 26, 'بزرگسال\n', 'مد و پوشاک,مردانه,لباس مردانه,سوییشرت و هودی مردانه', '1', 1, 1, 16900000, 16900000, 3, 2, 1, 0, 1, 1, 7, 11, '2023-02-09 12:51:37', '2023-02-11 19:43:04'),
(16, 10015, 26, 'mediom\n', 'مد و پوشاک,مردانه,لباس مردانه,سوییشرت و هودی مردانه', '1', 1, 20, 17500000, 17500000, 20, 0, 0, 0, 1, 1, 7, 11, '2023-02-09 12:51:52', '2023-02-11 20:05:00'),
(17, 10016, 25, 'بزرگسال\n', 'مد و پوشاک,مردانه,کفش مردانه,کفش روزمره', '2', 1, 5, 12500000, 11500000, 5, 0, 1, 1, 1, 2, 7, 8, '2023-02-09 13:05:48', '2023-02-09 13:05:48'),
(18, 10017, 25, 'خردسال\n', 'مد و پوشاک,مردانه,کفش مردانه,کفش روزمره', '2', 1, 6, 13500000, 12900000, 6, 0, 1, 0, 1, 1, 7, 8, '2023-02-09 13:06:08', '2023-02-11 15:59:45'),
(19, 10018, 24, 'بزرگسال\n', 'مد و پوشاک,مردانه,کفش مردانه,کفش روزمره', '3', 1, 4, 11900000, 10500000, 4, 0, 1, 0, 1, 1, 7, 11, '2023-02-09 13:07:17', '2023-02-09 13:07:17'),
(20, 10019, 23, 'A\n\n', 'مد و پوشاک,زنانه,اکسسوری زنانه,ساعت', '3', 1, 7, 53000000, 51900000, 7, 0, 1, 1, 1, 2, 6, 11, '2023-02-09 13:08:00', '2023-02-09 13:08:00'),
(21, 10020, 22, 'A\n', 'مد و پوشاک,زنانه,اکسسوری زنانه,ساعت', '5', 1, 1, 55900000, 55900000, 1, 0, 1, 0, 1, 1, 1, 8, '2023-02-09 13:08:27', '2023-02-14 20:01:38'),
(22, 10021, 21, 'A\n', 'کالاهای سوپرمارکتی,کالاهای اساسی و خوارو بار,نان', '1', 1, 1, 680000, 590000, 2, 1, 1, 1, 1, 2, 7, 5, '2023-02-09 13:10:12', '2023-02-22 12:37:54'),
(23, 10022, 20, 'A\n', 'کالاهای سوپرمارکتی,کالاهای اساسی و خوارو بار,نان', '2', 1, 2, 750000, 650000, 2, 0, 1, 0, 1, 1, 7, 5, '2023-02-09 13:10:37', '2023-02-09 13:10:37'),
(24, 10023, 19, 'مشکی\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,پاور بانک', '2', 1, 5, 3500000, 3190000, 5, 0, 1, 1, 1, 1, 3, 11, '2023-02-09 13:11:07', '2023-02-09 13:11:07'),
(25, 10024, 19, 'قرمز\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,پاور بانک', '1', 1, 2, 3900000, 3500000, 2, 0, 1, 1, 1, 3, 2, 11, '2023-02-09 13:11:26', '2023-02-11 15:59:42'),
(26, 10025, 18, 'آبی\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,پاور بانک', '2', 1, 2, 4500000, 4390000, 2, 0, 0, 1, 1, 1, 6, 10, '2023-02-09 13:12:36', '2023-02-09 13:12:36'),
(27, 10026, 18, 'سبز\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,پاور بانک', '4', 1, 1, 4900000, 4550000, 1, 0, 1, 0, 1, 1, 6, 10, '2023-02-09 13:12:59', '2023-02-09 13:12:59'),
(28, 10027, 17, 'زرد\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,پاور بانک', '2', 1, 4, 5900000, 5500000, 4, 0, 1, 0, 1, 2, 6, 11, '2023-02-09 13:15:20', '2023-02-09 13:15:20'),
(29, 10028, 17, 'سفید\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,پاور بانک', '1', 1, 3, 5800000, 5450000, 3, 0, 1, 1, 1, 1, 7, 11, '2023-02-09 13:15:37', '2023-02-09 13:15:37'),
(30, 10029, 16, 'مشکی\n', 'کالای دیجیتال,هدفون،هدست،هنذفری', '2', 1, 3, 29000000, 27900000, 3, 0, 1, 1, 1, 1, 7, 6, '2023-02-09 13:16:23', '2023-02-09 13:16:23'),
(31, 10030, 16, 'آبی\n', 'کالای دیجیتال,هدفون،هدست،هنذفری', '1', 1, 2, 27500000, 25500000, 2, 0, 0, 0, 1, 3, 7, 6, '2023-02-09 13:16:41', '2023-02-14 17:44:01'),
(32, 10031, 15, 'قرمز\n', 'کالای دیجیتال,هدفون،هدست،هنذفری', '1', 1, 1, 35000000, 32500000, 2, 1, 1, 1, 1, 1, 7, 6, '2023-02-09 13:17:15', '2023-02-11 19:43:04'),
(33, 10032, 15, 'زرد\n', 'کالای دیجیتال,هدفون،هدست،هنذفری', '5', 1, 7, 36900000, 33500000, 9, 2, 1, 1, 1, 1, 7, 6, '2023-02-09 13:17:41', '2023-02-11 19:43:04'),
(34, 10033, 14, 'مشکی\n', 'کالای دیجیتال,هدفون،هدست،هنذفری', '1', 1, 3, 28000000, 28000000, 3, 0, 1, 0, 1, 1, 7, 6, '2023-02-09 13:18:00', '2023-02-09 13:18:00'),
(35, 10034, 13, 'مشکی\n', 'کالای دیجیتال,لپتاپ', '2', 1, 4, 590000000, 575000000, 4, 0, 1, 1, 1, 2, 6, 12, '2023-02-09 13:18:44', '2023-02-09 13:18:44'),
(36, 10035, 13, 'قرمز\n', 'کالای دیجیتال,لپتاپ', '2', 1, 9, 599000000, 579000000, 9, 0, 1, 1, 1, 1, 7, 12, '2023-02-09 13:19:07', '2023-02-09 13:19:07'),
(37, 10036, 12, 'سفید\n', 'کالای دیجیتال,لپتاپ', '3', 1, 3, 650000000, 650000000, 3, 0, 1, 0, 1, 3, 5, 12, '2023-02-09 13:20:43', '2023-02-09 13:20:43'),
(38, 10037, 11, 'مشکی\n', 'کالای دیجیتال,لپتاپ', '1', 1, 1, 730000000, 690000000, 2, 1, 1, 1, 1, 1, 7, 6, '2023-02-09 13:28:16', '2023-02-11 19:43:04'),
(39, 10038, 10, 'قرمز\n', 'کالای دیجیتال,لپتاپ', '1', 1, 3, 750000000, 680000000, 4, 1, 1, 1, 1, 1, 7, 10, '2023-02-09 13:28:43', '2023-02-17 05:54:54'),
(40, 10039, 9, 'مشکی\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,کیف و کاور گوشی', '2', 1, 4, 3500000, 3190000, 4, 0, 1, 0, 1, 2, 7, 6, '2023-02-09 13:29:33', '2023-02-09 13:29:33'),
(41, 10040, 9, 'زرد\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,کیف و کاور گوشی', '2', 1, 9, 3900000, 3600000, 9, 0, 1, 1, 1, 1, 7, 6, '2023-02-09 13:29:48', '2023-02-09 13:29:48'),
(42, 10041, 8, 'قرمز\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,کیف و کاور گوشی', '3', 1, 1, 3700000, 3190000, 1, 0, 1, 0, 1, 1, 7, 10, '2023-02-09 13:30:54', '2023-02-14 20:00:17'),
(43, 10042, 8, 'سفید\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,کیف و کاور گوشی', '1', 1, 6, 3590000, 3390000, 6, 0, 1, 1, 1, 3, 7, 10, '2023-02-09 13:31:06', '2023-02-09 13:31:06'),
(44, 10043, 7, 'زرد\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,کیف و کاور گوشی', '1', 1, 3, 2900000, 2590000, 3, 0, 1, 1, 0, 1, 7, 11, '2023-02-09 13:31:27', '2023-02-14 19:18:47'),
(45, 10044, 7, 'سبز\n', 'کالای دیجیتال,گوشی موبایل,لوازم جانبی گوشی,کیف و کاور گوشی', '3', 1, 1, 2990000, 2790000, 1, 0, 1, 0, 0, 1, 7, 11, '2023-02-09 13:31:44', '2023-02-09 13:31:44'),
(46, 10045, 6, 'سبز\n', 'کالای دیجیتال,موبایل', '1', 1, 2, 790000000, 775000000, 4, 2, 1, 1, 1, 2, 7, 7, '2023-02-09 13:32:09', '2023-03-08 05:17:18'),
(47, 10046, 6, 'آبی\n', 'کالای دیجیتال,موبایل', '1', 1, 7, 830000000, 799000000, 7, 0, 1, 1, 1, 1, 7, 7, '2023-02-09 13:32:25', '2023-02-14 19:55:35'),
(48, 10047, 5, 'قرمز\n', 'کالای دیجیتال,موبایل', '2', 1, 5, 560000000, 539000000, 6, 1, 1, 0, 1, 1, 6, 7, '2023-02-09 13:34:34', '2023-04-10 11:44:16'),
(49, 10048, 5, 'آبی\n', 'کالای دیجیتال,موبایل', '2', 1, 2, 630000000, 590000000, 2, 0, 0, 0, 0, 3, 1, 7, '2023-02-09 13:35:01', '2023-02-14 19:55:18'),
(50, 10049, 4, 'مشکی\n', 'کالای دیجیتال,موبایل', '2', 1, 5, 640000000, 620000000, 6, 1, 1, 1, 1, 1, 4, 12, '2023-02-09 13:38:08', '2023-04-10 11:43:37'),
(51, 10050, 3, 'مشکی\n', 'کالای دیجیتال,موبایل', '4', 1, 0, 950000000, 930000000, 2, 2, 1, 1, 1, 1, 4, 12, '2023-02-09 13:38:39', '2023-02-11 20:05:50'),
(52, 10051, 27, 'L\n', 'مد و پوشاک,مردانه,لباس مردانه,سوییشرت و هودی مردانه', '2', 1, 3, 15900000, 13600000, 3, 0, 1, 1, 1, 1, 7, 8, '2023-02-11 07:20:12', '2023-02-14 20:00:16'),
(53, 10052, 16, 'آبی\n', 'کالای دیجیتال,هدفون،هدست،هنذفری', '3', 1, 3, 31900000, 27500000, 5, 2, 0, 1, 1, 1, 7, 6, '2023-02-12 11:09:28', '2023-03-08 05:23:56'),
(54, 10053, 3, 'یاسی\n', 'کالای دیجیتال,موبایل', '2', 1, 3, 650000000, 619000000, 3, 0, 1, 0, 1, 2, 6, 12, '2023-02-13 12:08:17', '2023-02-14 19:55:40'),
(55, 10054, 4, 'مشکی\n', 'کالای دیجیتال,موبایل', '3', 1, 2, 650000000, 625000000, 4, 2, 1, 0, 0, 2, 6, 12, '2023-02-13 12:09:23', '2023-03-08 05:17:18'),
(56, 10055, 10, 'آبی\n', 'کالای دیجیتال,لپتاپ', '2', 1, 3, 675000000, 675000000, 3, 0, 1, 0, 0, 2, 6, 10, '2023-02-17 05:16:49', '2023-02-22 12:33:15'),
(57, 10056, 15, 'قرمز\n', 'کالای دیجیتال,هدفون،هدست،هنذفری', '3', 1, 6, 36000000, 32400000, 6, 0, 1, 0, 0, 2, 7, 6, '2023-02-24 13:21:06', '2023-02-24 13:21:06');

-- --------------------------------------------------------

--
-- Table structure for table `volumes`
--

CREATE TABLE `volumes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `volume` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `volumes`
--

INSERT INTO `volumes` (`id`, `volume`, `created_at`, `updated_at`) VALUES
(1, '10cm', '2023-01-22 16:53:55', '2023-01-22 16:53:55'),
(2, '15cm', '2023-01-22 16:53:59', '2023-01-22 16:53:59'),
(3, '30cm', '2023-01-22 16:54:05', '2023-01-22 16:54:05'),
(4, '25cm', '2023-01-22 16:54:10', '2023-01-22 16:54:10'),
(5, '20cm', '2023-01-22 16:54:14', '2023-01-22 16:54:14'),
(6, '35cm', '2023-01-22 16:54:19', '2023-01-22 16:54:19'),
(7, '40cm', '2023-02-13 11:32:59', '2023-02-13 11:32:59');

-- --------------------------------------------------------

--
-- Table structure for table `warranties`
--

CREATE TABLE `warranties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `period` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `warranties`
--

INSERT INTO `warranties` (`id`, `name`, `period`, `image`, `created_at`, `updated_at`) VALUES
(1, 'سامسونگ', '18 ماهه', 'variations/guarantees/lSpNDU44wqnZN5PkRe31FbsKILcbWhpdC4eKX92a.jpg', '2023-01-22 16:55:05', '2023-01-22 16:55:05'),
(2, 'کاخلر', '36 ماهه', 'variations/guarantees/8B2cEVhLSQbOG8lcirld1kjuvfUS8fgUf97WfZMS.jpg', '2023-01-22 16:55:17', '2023-01-22 16:55:17'),
(3, 'کاخلر', '6 ماهه', 'variations/guarantees/GvK6QsfiUQ82EBf9ciK6RMTw5ih7NP5ShPrcQ9J7.jpg', '2023-01-22 16:55:33', '2023-01-22 16:55:33'),
(4, 'کاخلر', '18 ماهه', 'variations/guarantees/1LZCuzefIIbhvjGBLDfWsoiRwDnWWTKWCMTLxEX7.jpg', '2023-01-22 16:55:44', '2023-01-22 16:55:44'),
(5, 'سامسونگ', '48 ماهه', 'variations/guarantees/34YdWDnJC0rLFAAw5fBCW6DgZI5CJXLw5vyygupW.jpg', '2023-01-22 16:55:51', '2023-01-22 16:55:51'),
(6, 'سامسونگ', '12 ماهه', 'variations/guarantees/5StOe9NgP9wi4PizNt3UDh8HSX4pkZPK4oD6tVaj.jpg', '2023-01-22 16:55:59', '2023-01-22 16:55:59'),
(7, 'اصالت و سلامت فیزیکی کالا', '', '', '2023-01-22 16:55:59', '2023-01-22 16:55:59'),
(8, 'سامسونگ', '24 ماهه', 'variations/guarantees/nLpbvI0FXhPMfWzYppt2g618P0NajCw2IArZkWT3.jpg', '2023-02-14 05:16:44', '2023-02-14 05:16:44');

-- --------------------------------------------------------

--
-- Table structure for table `weights`
--

CREATE TABLE `weights` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `weight` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `weights`
--

INSERT INTO `weights` (`id`, `weight`, `created_at`, `updated_at`) VALUES
(1, '1kg', '2023-01-22 16:53:10', '2023-01-22 16:53:10'),
(2, '2kg', '2023-01-22 16:53:18', '2023-01-22 16:53:18'),
(3, '3kg', '2023-01-22 16:53:22', '2023-01-22 16:53:22'),
(4, '5kg', '2023-01-22 16:53:28', '2023-01-22 16:53:28'),
(5, '10kg', '2023-01-22 16:53:32', '2023-01-22 16:53:32'),
(6, '15kg', '2023-01-22 16:53:36', '2023-01-22 16:53:36'),
(7, '6kg', '2023-02-13 11:36:39', '2023-02-13 11:36:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `brands_name_unique` (`name`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categoryables`
--
ALTER TABLE `categoryables`
  ADD KEY `categoryables_categoryable_type_categoryable_id_index` (`categoryable_type`,`categoryable_id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `colors_name_unique` (`name`),
  ADD UNIQUE KEY `colors_color_unique` (`color`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_views`
--
ALTER TABLE `home_views`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `massages`
--
ALTER TABLE `massages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nums`
--
ALTER TABLE `nums`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nums_number_unique` (`number`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_dkp_unique` (`dkp`),
  ADD UNIQUE KEY `products_name_unique` (`name`);

--
-- Indexes for table `seller_requests`
--
ALTER TABLE `seller_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sizes_sizes_unique` (`size`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `varieties`
--
ALTER TABLE `varieties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `volumes`
--
ALTER TABLE `volumes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `volumes_volume_unique` (`volume`);

--
-- Indexes for table `warranties`
--
ALTER TABLE `warranties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `weights`
--
ALTER TABLE `weights`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `weights_weight_unique` (`weight`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `home_views`
--
ALTER TABLE `home_views`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `massages`
--
ALTER TABLE `massages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `nums`
--
ALTER TABLE `nums`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `seller_requests`
--
ALTER TABLE `seller_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `varieties`
--
ALTER TABLE `varieties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `volumes`
--
ALTER TABLE `volumes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `warranties`
--
ALTER TABLE `warranties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `weights`
--
ALTER TABLE `weights`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
