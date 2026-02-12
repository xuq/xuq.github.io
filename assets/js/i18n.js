(() => {
  const STORAGE_KEY = "site_lang";
  const DEFAULT_LANG = "en";

  const translations = {
    en: {
      "nav.about": "About",
      "nav.blog": "Blog",
      "nav.projects": "Projects",
      "nav.publications": "Publications/Patents",
      "nav.cv": "CV",
      "nav.teaching": "Teaching",
      "nav.repositories": "Repositories",
      "section.news": "News",
      "section.latest_posts": "latest posts",
      "section.selected_publications": "Selected publications",
      "repo.github_users": "GitHub Users",
      "repo.github_repositories": "GitHub Repositories",
      "projects.category.work": "work",
      "about.intro.1":
        "I am a Senior Principal Engineer and Research Lead at the Human-Machine Interaction Lab, Huawei Technologies Canada. My work focuses on building new user experiences powered by novel machine learning and signal processing systems that fuse multiple sensor modalities (e.g., audio, motion, touch, proximity) into reliable and delightful interactions.",
      "about.intro.2":
        "I lead research and productization in Human-Computer Interaction, Sensing & Interaction, On-Body Sensing, Wearable Computing, Cross-Device Interaction, and Speech Interaction (Voice UI). Recent efforts span wearable and multi-device ecosystems, including earable gesture recognition, smartwatch interaction, stylus and touch input, on-body microphone-based sensing, and speech interaction for smart devices.",
      "about.intro.3":
        "I have published at top venues including ACM UbiComp/IMWUT, IEEE INFOCOM, ACM MobileHCI, and IFIP INTERACT, and hold 50+ patents covering areas such as cross-device interaction, wearable device control, wireless sensing, and spatial perception.",
      "teaching.body.1": "Course and mentoring materials will be updated here over time.",
      "teaching.body.2":
        "I use this page to share teaching activities, guest lectures, and learning resources related to human-computer interaction, sensing, and ubiquitous computing.",
      "common.direct_video_link": "Direct video link",
      "p1.h2": "Celia Whisper",
      "p1.intro":
        "Celia Whisper is a hands-free voice assistant interaction mode that I led the development of at Huawei. It enables users to issue voice commands to Huawei's AI assistant without speaking the traditional wake word, by simply raising the phone close to the mouth.",
      "p1.demo.heading": "Demo Video",
      "p1.demo.caption": "Celia Whisper interaction demo.",
      "p1.how.heading": "How It Works",
      "p1.how.body":
        "The system combines on-body sensing with proximity detection: when the user lifts the phone with the microphone positioned within 5cm of the mouth, voice processing is automatically activated. This eliminates the need for verbal wake phrases, enabling natural and discreet voice interaction.",
      "p1.features.heading": "Key Features",
      "p1.features.f1.title": "Wake-word-free activation",
      "p1.features.f1.body": "Raise-to-speak gesture replaces the traditional \"Hey Celia\" wake word.",
      "p1.features.f2.title": "Quiet environment usage",
      "p1.features.f2.body": "Designed for scenarios requiring silence, such as libraries, meetings, and theaters.",
      "p1.features.f3.title": "Adaptive volume response",
      "p1.features.f3.body": "The assistant's reply volume automatically adjusts based on detected user voice levels.",
      "p1.features.f4.title": "Whisper support",
      "p1.features.f4.body": "Users can speak in either normal or whispered tones.",
      "p1.gallery.heading": "Gallery",
      "p1.official.heading": "Official Images (Huawei Support)",
      "p1.devices.heading": "Supported Devices",
      "p1.devices.d1.title": "Mate Series",
      "p1.devices.d1.body": "Mate 70 / 70 Pro / 70 Pro+, Mate 80 / 80 Pro / 80 Pro Max, Mate X6 / X7.",
      "p1.devices.d2.title": "Pura Series",
      "p1.devices.d2.body": "Pura X, Pura 80 Pro / Pro+ / Ultra.",
      "p1.devices.d3": "Requires HarmonyOS 5.0 or later.",
      "p1.links.heading": "Links",
      "p1.links.l1": "Huawei Support Page",
      "p1.links.l2": "Huawei Official Video Guide (on support page)",
      "p2.h2": "Smart Parking Locator",
      "p2.intro":
        "Many people have experienced the frustration of finding a parked car, especially in large and unfamiliar underground parking garages. Everything looks similar, and time is easily wasted trying to remember the exact floor and parking spot. To solve this, Huawei introduced Smart Parking Locator on Mate X7 and Mate 80 series phones, with support for parking floor and nearby slot recording, plus route-back guidance for faster car retrieval.",
      "p2.card.heading": "Swipe To Smart Card: Floor And Slot At A Glance",
      "p2.card.body":
        "The interaction is effortless. After you park and leave your car, there is no need to manually note the location or install an extra app. Just swipe to the left-most smart screen, where an auto-generated parking card shows the parking floor and nearby slot number. In supported garages, a visual parking map helps users quickly lock onto the car's direction.",
      "p2.gps.heading": "GPS-Free Precision Positioning In Underground Garages",
      "p2.gps.body":
        "Accurate indoor parking localization is enabled by deep integration of AI perception and spatial positioning technologies. The phone detects key \"user leaving car\" signals and combines them with sensor data generated while driving inside the garage, then performs real-time matching and dynamic calibration. Even in fully GPS-denied environments, the system can still pinpoint parking floor and slot location.",
      "p2.coverage.heading": "Broad Coverage Across High-Demand Scenarios",
      "p2.coverage.body":
        "The feature currently covers major underground parking lots in over 300 cities across China, totaling more than 20,000 locations. It focuses on high-traffic venues with frequent car-finding needs, including large shopping malls, transportation hubs (airports and high-speed railway stations), and business office complexes. Users can check Huawei's official website to see whether their frequent parking lots are supported.",
      "p2.route.heading": "Route-Back Car Finding: A Complete Retrieval Experience",
      "p2.route.body":
        "For shopping malls that support high-precision indoor positioning, a route-back feature further improves retrieval efficiency. When users are ready to return to their car, they can open the parking card and start navigation. The system highlights the elevator originally used on arrival and provides clear real-time directional guidance. Following the same path helps users reach their car quickly and avoid taking the wrong elevator or unnecessary detours.",
      "p2.preview.heading": "Animated Preview",
      "p2.summary":
        "In short, Huawei's Smart Parking Locator breaks the limitations of underground spaces and turns car retrieval into a smoother, faster experience. On your next trip, let your phone remember the floor and slot details so you can get back to your car with confidence.",
      "p2.links.heading": "Links",
      "p2.links.l1": "Zhihu Article",
      "p3.h2": "Keyboard & Mouse Cross-Device Roaming",
      "p3.intro":
        "I led and delivered a cross-device interaction experience that allows HUAWEI wireless mouse and keyboard to roam across multiple hosts. After pairing with multiple tablets/PCs, users can move the mouse across screen boundaries to switch devices instantly, and the keyboard follows the mouse focus automatically for seamless multi-device productivity.",
      "p3.demo.heading": "Demo Video",
      "p3.demo.caption": "Keyboard & Mouse Cross-Device Roaming official demo.",
      "p3.capability.heading": "Core Capability",
      "p3.capability.c1": "Supports up to three hosts (tablet/PC) connected to one mouse and one keyboard.",
      "p3.capability.c2": "Mouse cursor crosses device boundaries directly without pressing a manual switch key.",
      "p3.capability.c3": "Keyboard follows the active mouse target automatically, enabling true keyboard-mouse collaboration.",
      "p3.requirements.heading": "Compatibility And Version Requirements",
      "p3.requirements.r1": "Tablet: Bluetooth 5.0+, HarmonyOS 3.0 to HarmonyOS 5.0, Smart Life App 13.0.1.315+.",
      "p3.requirements.r2": "Supported HUAWEI Windows PC: Bluetooth 5.0+, PC Manager 13.0.2.300+.",
      "p3.requirements.r3": "Other PCs: Windows 10+ or macOS 10.15+, with the cross-device client installed.",
      "p3.requirements.r4": "Firmware baseline: mouse 1.0.7.0+, 2.4G receiver 1.0.1.9+, keyboard X.0.0.158+.",
      "p3.requirements.r5": "HarmonyOS 3.0 beta preview does not support this feature; HarmonyOS 3.0 official release does.",
      "p3.flow.heading": "Configuration Flow",
      "p3.flow.f1": "Upgrade required apps/clients and verify host Bluetooth capability.",
      "p3.flow.f2": "Pair mouse/keyboard with one host, then complete peripheral firmware upgrade.",
      "p3.flow.f3": "Repeat pairing for remaining hosts, then enable Mouse Roaming and Keyboard-Mouse Collaboration in device settings.",
      "p3.flow.f4": "Adjust relative host positions in UI and validate boundary crossing in real usage.",
      "p3.gallery.heading": "Gallery",
      "p3.value.heading": "User Value",
      "p3.value.body":
        "This feature removes device-switch friction in daily workflows. It provides a natural cross-screen interaction model for office, study, and content creation scenarios, reducing context-switch overhead and improving multi-device efficiency.",
      "p3.links.heading": "Links",
      "p3.links.l1": "Huawei Support Article",
      "p4.h2": "HarmonyOS Hand-Eye Collaboration",
      "p4.intro":
        "This project extends cross-device keyboard and mouse sharing in HarmonyOS with gaze-assisted cursor switching. During keyboard-mouse sharing, users can look at another nearby screen and press Ctrl to move the cursor focus to that device, reducing manual boundary-crossing operations in multi-screen workflows.",
      "p4.demo.heading": "Demo Video",
      "p4.demo.caption": "Official cross-device keyboard-mouse sharing demo.",
      "p4.feature.heading": "Feature Highlights",
      "p4.feature.f1": "When keyboard-mouse sharing is enabled, gaze at the target device and press Ctrl to transfer cursor focus.",
      "p4.feature.f2": "Works with cross-device keyboard typing, app operation, and drag-and-drop workflows.",
      "p4.feature.f3": "Improves continuity and speed in multi-device office and content-creation scenarios.",
      "p4.setup.heading": "Setup Path",
      "p4.setup.s1": "Enable Keyboard-Mouse Sharing on both devices (Settings > Multi-device > Keyboard-Mouse Sharing).",
      "p4.setup.s2": "On both devices, turn on Hand-Eye Collaboration under keyboard-mouse sharing settings.",
      "p4.setup.s3": "Adjust screen arrangement direction to match actual physical layout.",
      "p4.setup.s4": "Look at the target device, then press Ctrl on the source device to switch cursor focus.",
      "p4.gallery.heading": "Gallery",
      "p4.links.heading": "Links",
      "p4.links.l1": "Huawei Support Article",
      "p5.h2": "Huawei Watch Fall Detection",
      "p5.intro":
        "Huawei Watch supports severe fall detection with SOS emergency assistance. After the feature is enabled, the watch can detect serious falls and trigger emergency actions, helping users reach contacts or public emergency services faster in critical situations.",
      "p5.auto.heading": "Automatic Emergency Assistance After Fall Detection",
      "p5.auto.a1": "When a severe fall is detected, the watch enters SOS flow. If no action is taken within 60 seconds, it automatically starts emergency calling.",
      "p5.auto.a2": "If emergency contacts are configured, the watch calls the first emergency contact and sends distress SMS with current location information to all emergency contacts.",
      "p5.auto.a3": "If no emergency contact is configured, the watch displays public emergency numbers for manual calling.",
      "p5.manual.heading": "Manual SOS Trigger",
      "p5.manual.body": "Users can trigger SOS manually by pressing the upper button five times in a row. This path can quickly initiate emergency calling and related emergency notifications.",
      "p5.setup.heading": "Setup Essentials",
      "p5.setup.s1": "In Huawei Health, complete Personal Emergency Information and add up to three emergency contacts.",
      "p5.setup.s2": "On watch, open Settings > SOS Emergency Assistance (or Settings > Security & Privacy > SOS Emergency Assistance) and enable fall detection.",
      "p5.setup.s3": "If dual-SIM phone is connected through Bluetooth, set the default calling SIM in advance for reliable emergency dialing.",
      "p5.gallery.heading": "Gallery",
      "p5.links.heading": "Links",
      "p5.links.l1": "Huawei Support Article"
    },
    zh: {
      "nav.about": "关于",
      "nav.blog": "博客",
      "nav.projects": "项目",
      "nav.publications": "论文/专利",
      "nav.cv": "简历",
      "nav.teaching": "教学",
      "nav.repositories": "代码仓库",
      "section.news": "动态",
      "section.latest_posts": "最新文章",
      "section.selected_publications": "精选论文",
      "repo.github_users": "GitHub 用户",
      "repo.github_repositories": "GitHub 仓库",
      "projects.category.work": "工作项目",
      "about.intro.1":
        "我目前在华为加拿大人机交互实验室担任资深首席工程师和研究负责人。工作重点是用新颖的机器学习与信号处理系统，对多模态传感器数据（如音频、运动、触控、近距等）进行融合建模，从而打造更可靠、更自然的全新用户体验。"
      "about.intro.2":
        "我负责并推动落地的人机交互方向包括：人机交互、感知与交互、贴身感知、可穿戴计算、跨设备交互，以及语音交互（Speech Interaction / Voice UI）。近期工作覆盖可穿戴与多设备生态中的新型交互范式，如耳戴设备手势识别、智能手表交互、手写笔与触控输入、基于贴身麦克风的感知，以及面向智能设备的语音交互。"
      "about.intro.3":
        "我在 ACM UbiComp/IMWUT、IEEE INFOCOM、ACM MobileHCI、IFIP INTERACT 等顶级会议和期刊发表研究成果，并拥有 50+ 项专利，方向涵盖跨设备交互、可穿戴设备控制、无线感知与空间感知。"
      "teaching.body.1": "课程与指导相关资料将持续在此页面更新。",
      "teaching.body.2":
        "该页面将用于分享我在人机交互、感知系统与泛在计算方向的教学活动、讲座以及学习资源。",
      "common.direct_video_link": "视频直链",
      "p1.h2": "小艺私语",
      "p1.intro":
        "小艺私语是我在华为主导研发的一项免唤醒语音交互能力。用户无需说出传统唤醒词，只需将手机抬至嘴边即可直接发起语音指令。",
      "p1.demo.heading": "演示视频",
      "p1.demo.caption": "小艺私语交互演示。",
      "p1.how.heading": "工作方式",
      "p1.how.body":
        "该系统融合了贴身感知与近距检测能力：当用户抬起手机并使麦克风靠近嘴部约 5cm 时，语音处理会自动激活。由此可省去口头唤醒词，实现更自然、更低干扰的语音交互。",
      "p1.features.heading": "核心特性",
      "p1.features.f1.title": "免唤醒激活",
      "p1.features.f1.body": "通过抬手即说手势替代传统“Hey Celia”唤醒词。",
      "p1.features.f2.title": "安静场景可用",
      "p1.features.f2.body": "适用于图书馆、会议室、影院等需低声交流或保持安静的场景。",
      "p1.features.f3.title": "自适应音量反馈",
      "p1.features.f3.body": "助手回复音量可根据用户语音强度自动调节。",
      "p1.features.f4.title": "支持私语输入",
      "p1.features.f4.body": "用户可使用正常音量或轻声私语与助手交互。",
      "p1.gallery.heading": "效果展示",
      "p1.official.heading": "官方素材（华为支持页）",
      "p1.devices.heading": "支持机型",
      "p1.devices.d1.title": "Mate 系列",
      "p1.devices.d1.body": "Mate 70 / 70 Pro / 70 Pro+，Mate 80 / 80 Pro / 80 Pro Max，Mate X6 / X7。",
      "p1.devices.d2.title": "Pura 系列",
      "p1.devices.d2.body": "Pura X，Pura 80 Pro / Pro+ / Ultra。",
      "p1.devices.d3": "需 HarmonyOS 5.0 及以上版本。",
      "p1.links.heading": "相关链接",
      "p1.links.l1": "华为支持页",
      "p1.links.l2": "华为官方视频指引（支持页内）",
      "p2.h2": "精准寻车",
      "p2.intro":
        "相信不少人都有过在停车场找车的经历，尤其是在陌生的大型地下停车场，看哪里都像似曾相识，但兜兜转转来回穿梭就是记不起车停在哪一层、哪个车位，白白浪费了宝贵的时间。为此，华为在 Mate X7、Mate 80 系列手机上推出了精准寻车能力，支持记录停车楼层与附近车位号，并支持原路返回寻车。",
      "p2.card.heading": "右滑负一屏：楼层与车位一目了然",
      "p2.card.body":
        "操作零门槛，便捷无忧。停车熄火离车后，无需手动记录，也无需额外下载 App。右滑进入负一屏，即可看到智能生成的停车卡片，清晰显示停车楼层与附近车位号。部分地库还支持直观车位图，帮助快速锁定车辆方向。",
      "p2.gps.heading": "无 GPS 信号也能精准定位",
      "p2.gps.body":
        "地下车库精准定位的关键在于 AI 感知与空间定位技术的融合。手机可实时捕捉“用户离车”关键信号，并结合地库行驶过程中的传感器数据进行匹配与动态校准。即便在完全无 GPS 信号环境中，也能定位停车楼层与车位。",
      "p2.coverage.heading": "海量场景覆盖，出行更安心",
      "p2.coverage.body":
        "该功能目前已覆盖全国 300 多座城市、超过 20,000 个主流地下停车场，重点覆盖大型购物中心、交通枢纽（机场/高铁站）和商务写字楼等高频寻车场景。用户可在华为官网查询常去停车场是否支持。",
      "p2.route.heading": "原路返回寻车：效率再升级",
      "p2.route.body":
        "对于支持室内高精定位的商场，系统进一步提供原路返回寻车。用户启动寻车后，系统可智能显示来时乘坐的电梯位置，并提供实时方向指引。沿原路径下楼可快速到达车辆，避免找错电梯和绕行。",
      "p2.preview.heading": "动图演示",
      "p2.summary":
        "总的来说，精准寻车能力有效打破地下空间定位限制，让找车更高效、更省心。下一次出行，让手机帮你记住楼层与车位。",
      "p2.links.heading": "相关链接",
      "p2.links.l1": "知乎原文",
      "p3.h2": "键鼠穿越",
      "p3.intro":
        "我主导并落地了华为无线键鼠跨设备穿越体验。用户将鼠标与键盘连接至多台平板/电脑后，可通过鼠标跨越屏幕边界快速切换目标设备，键盘输入焦点也会自动跟随，实现更流畅的多设备协同办公。",
      "p3.demo.heading": "演示视频",
      "p3.demo.caption": "键鼠穿越官方演示视频。",
      "p3.capability.heading": "核心能力",
      "p3.capability.c1": "支持一套键鼠连接最多 3 台平板/电脑主机。",
      "p3.capability.c2": "鼠标可直接跨越屏幕边界切换设备，无需手动按键切换。",
      "p3.capability.c3": "键盘可自动跟随鼠标焦点设备，实现键鼠协同穿越。",
      "p3.requirements.heading": "兼容性与版本要求",
      "p3.requirements.r1": "平板端：蓝牙 5.0+，HarmonyOS 3.0 至 HarmonyOS 5.0，智慧生活 App 13.0.1.315+。",
      "p3.requirements.r2": "支持超级终端的华为 Windows 电脑：蓝牙 5.0+，电脑管家 13.0.2.300+。",
      "p3.requirements.r3": "其他电脑：Windows 10+ 或 macOS 10.15+，并安装键鼠穿越客户端。",
      "p3.requirements.r4": "固件要求：鼠标 1.0.7.0+，2.4G 接收器 1.0.1.9+，键盘 X.0.0.158+。",
      "p3.requirements.r5": "HarmonyOS 3.0 内测版本暂不支持该能力，HarmonyOS 3.0 正式版支持。",
      "p3.flow.heading": "配置流程",
      "p3.flow.f1": "升级所需 App/客户端并确认主机蓝牙能力。",
      "p3.flow.f2": "将键鼠先与一台主机配对，并完成外设固件升级。",
      "p3.flow.f3": "依次完成其余主机配对，并在设置中开启鼠标穿越与键鼠协同。",
      "p3.flow.f4": "在界面中调整设备相对位置，实测跨边界穿越效果。",
      "p3.gallery.heading": "效果展示",
      "p3.value.heading": "用户价值",
      "p3.value.body":
        "该能力显著降低了多设备工作流中的切换成本。通过更自然的跨屏交互模型，用户可在办公、学习和创作场景中提升协同效率与连续性。",
      "p3.links.heading": "相关链接",
      "p3.links.l1": "华为支持文章",
      "p4.h2": "鸿蒙手眼同行",
      "p4.intro":
        "该项目在鸿蒙跨设备键鼠共享基础上进一步引入注视驱动的光标切换能力。开启键鼠共享后，用户注视目标设备并按下 Ctrl 键，即可将光标快速切换到被注视设备，降低多屏协同中的手动穿越操作成本。",
      "p4.demo.heading": "演示视频",
      "p4.demo.caption": "官方跨设备键鼠共享演示视频。",
      "p4.feature.heading": "功能亮点",
      "p4.feature.f1": "开启键鼠共享后，可通过注视目标设备并按 Ctrl 键完成光标焦点切换。",
      "p4.feature.f2": "可与跨设备键盘输入、应用操作与拖拽传输能力协同使用。",
      "p4.feature.f3": "在多设备办公和创作场景中显著提升连续性与切换效率。",
      "p4.setup.heading": "配置路径",
      "p4.setup.s1": "在双方设备开启键鼠共享（设置 > 多设备协同 > 键鼠共享）。",
      "p4.setup.s2": "在双方设备的键鼠共享设置中开启手眼同行。",
      "p4.setup.s3": "根据真实摆放关系调整设备屏幕排列方向。",
      "p4.setup.s4": "注视目标设备后，在源设备按下 Ctrl 键即可切换光标焦点。",
      "p4.gallery.heading": "效果展示",
      "p4.links.heading": "相关链接",
      "p4.links.l1": "华为支持文章",
      "p5.h2": "华为手表跌倒检测",
      "p5.intro":
        "华为手表支持严重跌倒检测与 SOS 紧急求助能力。开启该功能后，手表在识别到严重跌倒时可触发紧急流程，帮助用户在关键场景下更快联系紧急联系人或公共紧急服务。",
      "p5.auto.heading": "跌倒后自动发起紧急求助",
      "p5.auto.a1": "检测到严重跌倒后，手表进入 SOS 流程；若 60 秒内未操作，将自动发起紧急呼叫。",
      "p5.auto.a2": "若已设置紧急联系人，手表会自动呼叫第一紧急联系人，并向全部紧急联系人发送包含当前位置的求助短信。",
      "p5.auto.a3": "若未设置紧急联系人，手表会显示公共紧急号码供手动呼叫。",
      "p5.manual.heading": "手动 SOS 触发",
      "p5.manual.body": "用户可通过连续按压上键 5 次手动发起 SOS 紧急求助，快速进入呼叫和通知流程。",
      "p5.setup.heading": "配置要点",
      "p5.setup.s1": "在华为运动健康 App 中完善个人紧急信息，并最多添加 3 位紧急联系人。",
      "p5.setup.s2": "在手表设置中进入 SOS 紧急求助（或安全和隐私 > SOS 紧急求助），并开启跌倒检测。",
      "p5.setup.s3": "若手表通过蓝牙连接双卡手机，建议预先设置默认拨号卡以保证紧急呼叫稳定性。",
      "p5.gallery.heading": "效果展示",
      "p5.links.heading": "相关链接",
      "p5.links.l1": "华为支持文章",

      "p7.h2": "鸿蒙新碰一碰（手机碰屏幕 / 跨端互联）",
      "p7.intro": "本页面整理“碰一碰”类跨端互联体验：把文件分享、连接网络等多步骤流程，压缩成一次更符合物理直觉的轻触动作。",
      "p7.problem.heading": "体验动机（解决什么问题）",
      "p7.problem.f1": "降低摩擦：传统跨端传输往往依赖数据线/网盘/第三方应用，步骤多、打断思路。",
      "p7.problem.f2": "降低切换成本：减少“选设备/配对/确认权限/找入口”的频繁中断。",
      "p7.core.heading": "核心交互（是什么）",
      "p7.core.c1": "Direct manipulation：用“触碰”来表达“发送到这里”。",
      "p7.core.c2": "融合感知：系统可感知触碰位置，并推断目标窗口/应用（媒体报道描述）。",
      "p7.core.c3": "一步导入：将手机素材直接导入电脑端已打开的编辑/创作应用窗口（媒体报道描述）。",
      "p7.images.heading": "配图（优先使用官方支持页素材）",
      "p7.images.extra.heading": "补充截图（新闻页示意，仅作参考）",
      "p7.links.heading": "Links / sources",
      "p7.links.l1": "华为官网：华为分享 / 一碰互联与多屏协同说明与配图",
      "p7.links.l2": "IT之家：HarmonyOS 6 / 鸿蒙电脑“碰一碰”与跨端互联描述",
      "p7.links.l3": "中国日报网：手机间“碰一碰”场景与截图来源",
      "p7.media.heading": "媒体",
      "p7.media.caption": "视频来源：YouTube。",
      "p7.links.yt": "YouTube 视频",
      "p7.links.qq": "腾讯新闻（ZOL）文章",
      "p7.links.it": "IT之家文章",
      "p7.note": "注：本页暂不展示配图，视觉参考以视频与来源链接为准。",

      "p8.h2": "鸿蒙碰一碰（手机碰手机）",
      "p8.intro": "本页面整理 HarmonyOS 的“碰一碰”手机对手机分享体验（Tap-to-Share / 碰一碰）。",
      "p8.what.heading": "能做什么",
      "p8.what.w1": "无需加好友：手机与手机碰一碰即可触发分享流程。",
      "p8.what.w2": "典型内容包含图片/视频、WLAN/热点信息、文档等（以系统/应用/版本支持为准）。",
      "p8.what.w3": "触发动效后，发送端按提示“上滑”发送，接收端点击接收（来源报道描述）。",
      "p8.how.heading": "基本流程（参考）",
      "p8.how.s1": "双方手机亮屏解锁，并确保已开启华为分享服务。",
      "p8.how.s2": "在发送端进入可分享界面（例如图库图片、WLAN/热点详情页等）。",
      "p8.how.s3": "将两台手机顶端触碰，出现碰一碰动效。",
      "p8.how.s4": "按屏幕提示操作：发送端上滑分享，接收端点击接收。",
      "p8.notes.heading": "注意事项",
      "p8.notes.n1": "需要满足机型/系统/应用版本要求；不同地区与机型支持情况可能不同。",
      "p8.notes.n2": "本页为基于公开来源的体验总结，不构成官方规格说明。",
      "p8.links.heading": "Links / sources",
      "p8.links.qq": "腾讯新闻（引用 IT之家 内容）：玩法与步骤说明",
      "p8.links.huawei": "华为官网支持页：主题 App 的“碰一碰”资源分享说明（手机碰手机）"
    }
  };

  const getSavedLang = () => localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  const setSavedLang = (lang) => localStorage.setItem(STORAGE_KEY, lang);

  const t = (lang, key) => (translations[lang] && translations[lang][key]) || null;

  const applyKeyTranslations = (lang) => {
    document.querySelectorAll("[data-i18n-key]").forEach((el) => {
      const key = el.getAttribute("data-i18n-key");
      const value = t(lang, key);
      if (!value) return;

      if (el.children.length > 0) {
        if (el.firstChild && el.firstChild.nodeType === Node.TEXT_NODE) {
          el.firstChild.nodeValue = `${value} `;
        } else {
          el.insertBefore(document.createTextNode(`${value} `), el.firstChild);
        }
      } else {
        el.textContent = value;
      }
    });
  };

  const applyAttrTranslations = (lang) => {
    document.querySelectorAll("[data-i18n-title], [data-i18n-description], [data-i18n-subtitle]").forEach((el) => {
      const en = el.getAttribute("data-i18n-en") || "";
      const zh = el.getAttribute("data-i18n-zh") || en;
      el.textContent = lang === "zh" ? zh : en;
    });
  };

  const applyContentTranslations = (lang) => {
    document.querySelectorAll("[data-i18n-content-key]").forEach((el) => {
      // Preserve original content (assumed EN) so we can switch back.
      if (!el.hasAttribute("data-i18n-en-content")) {
        el.setAttribute("data-i18n-en-content", el.textContent || "");
      }

      const key = el.getAttribute("data-i18n-content-key");
      const value = t(lang, key);

      if (value) {
        el.textContent = value;
      } else if (lang === "en") {
        // If no EN translation exists, restore original English content.
        el.textContent = el.getAttribute("data-i18n-en-content") || "";
      }
    });
  };

  const updateToggle = (lang) => {
    const label = document.getElementById("lang-toggle-label");
    if (!label) return;
    label.textContent = lang === "zh" ? "EN" : "中文";
  };

  const applyLang = (lang) => {
    document.documentElement.setAttribute("lang", lang);
    applyKeyTranslations(lang);
    applyAttrTranslations(lang);
    applyContentTranslations(lang);
    updateToggle(lang);
  };

  document.addEventListener("DOMContentLoaded", () => {
    let lang = getSavedLang();
    applyLang(lang);

    const btn = document.getElementById("lang-toggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
      lang = lang === "zh" ? "en" : "zh";
      setSavedLang(lang);
      applyLang(lang);
    });
  });
})();
