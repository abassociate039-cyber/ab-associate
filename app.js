/* ==========================================================================
   AB & ASSOCIATE - JAVASCRIPT APP ENGINE
   Multi-language (EN / GU / HI), Dark/Light Theme, 3D NFC Card Physics,
   Dynamic QR Code, vCard Generator, Tax Calendar & WhatsApp Modal
   ========================================================================== */

(function () {
  'use strict';

  // --- BUSINESS CONFIGURATION ---
  const BUSINESS_INFO = {
    name: 'AB & Associate',
    nameGU: 'એબી એન્ડ એસોસિએટ',
    nameHI: 'एबी एंड एसोसिएट',
    tagline: 'Your Growth, Our Commitment',
    taglineGU: 'તમારો વિકાસ, અમારો સંકલ્પ',
    taglineHI: 'आपकी प्रगति, हमारा संकल्प',
    pillars: 'TAX | ACCOUNTING | ADVISORY | COMPLIANCE',
    pillarsGU: 'ટેક્સ | એકાઉન્ટિંગ | સલાહકાર | નિયમ પાલન',
    pillarsHI: 'टैक्स | अकाउंटिंग | सलाहकार | अनुपालन',
    phone: '+919974574539',
    phoneDisplay: '+91 99745 74539',
    email: 'abassociate039@gmail.com',
    location: 'Ahmedabad, Gujarat, India',
    locationGU: 'અમદાવાદ, ગુજરાત, ભારત',
    locationHI: 'अहमदाबाद, गुजरात, भारत',
    mapUrl: 'https://www.google.com/maps/place/AB+%26+Associate+%7C+Ahmedabad/data=!4m2!3m1!1s0x0:0x8b0becf14b9e43ba?sa=X&ved=1t:2428&hl=en&ictx=111',
    instagramUrl: 'https://www.instagram.com/abassociate039',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61595372422259',
    whatsappUrl: 'https://wa.me/919974574539',
    websiteUrl: window.location.href
  };

  // --- MULTILINGUAL DICTIONARY (EN, GU, HI) ---
  const I18N = {
    en: {
      langName: 'English',
      langCode: 'EN',
      tagline: 'Your Growth, Our Commitment',
      pillars: 'TAX | ACCOUNTING | ADVISORY | COMPLIANCE',
      saveContact: 'Save to Contacts (vCard)',
      saveContactShort: 'Save Card',
      call: 'Call Now',
      whatsapp: 'WhatsApp',
      email: 'Email Us',
      directions: 'Location',
      shareCard: 'Share / QR',
      showQR: 'Scan / Share QR',
      bookConsultation: 'Book Consultation',
      searchPlaceholder: 'Search tax, GST, accounting, company, compliance...',
      filterAll: 'All Services',
      filterTax: 'Income Tax',
      filterGst: 'GST Services',
      filterAcc: 'Accounting',
      filterMca: 'Company & MCA',
      filterAdv: 'Advisory',
      filterNgo: 'NGO & Trust',
      filterOther: 'Other Services',
      servicesTitle: 'Our Professional Services',
      servicesSub: 'End-to-end Financial & Legal Solutions',
      inquireBtn: 'Inquire on WhatsApp',
      bookServiceBtn: 'Book Service',
      complianceCalendar: 'Compliance Deadlines',
      complianceSub: 'Upcoming Indian Tax & Regulatory Dates',
      calculatorTitle: 'Quick Service Fee Estimator',
      calculatorSub: 'Instant transparent pricing estimate for your business',
      selectServiceType: 'Select Service Required:',
      selectClientType: 'Business / Entity Type:',
      estimatedFee: 'Starting Estimate:',
      getExactQuote: 'Get Exact Quote on WhatsApp',
      reviewsTitle: 'Client Testimonials',
      reviewsSub: 'Trusted by 500+ businesses across Gujarat & India',
      connectTitle: 'Connect on Social Media',
      connectSub: 'Follow us for latest tax updates & notifications',
      hoursLabel: 'Office Hours:',
      hoursVal: 'Mon - Sat: 10:00 AM - 7:30 PM',
      statsClients: '500+ Happy Clients',
      statsCompliance: '100% Compliance',
      statsExp: '10+ Years Expertise',
      statsRating: '4.9★ Top Rated',
      pillar1: 'Professional Expertise',
      pillar2: 'Accuracy & Compliance',
      pillar3: 'Personalised Advisory',
      pillar4: 'Business Growth Support',
      pillar5: 'Timely Service',
      modalConsultTitle: 'Book Free Consultation',
      modalShareTitle: 'Share & Scan Digital Card',
      qrScanInstruction: 'Point any smartphone camera to scan and instantly open AB & Associate\'s Digital Profile.',
      copyLinkBtn: 'Copy Profile Link',
      nameField: 'Your Full Name',
      phoneField: 'Mobile Number',
      serviceField: 'Service Required',
      msgField: 'Message / Business Details (Optional)',
      submitConsult: 'Send Request via WhatsApp',
      copiedToast: 'Link copied to clipboard!',
      vcardToast: 'Contact card (.vcf) downloaded!',
      footerCommitment: 'Committed to delivering excellence in tax advisory and statutory business compliance.'
    },
    gu: {
      langName: 'ગુજરાતી',
      langCode: 'GU',
      tagline: 'તમારો વિકાસ, અમારો સંકલ્પ',
      pillars: 'ટેક્સ | એકાઉન્ટિંગ | સલાહકાર | નિયમ પાલન',
      saveContact: 'કોન્ટેક્ટ સેવ કરો (vCard)',
      saveContactShort: 'સેવ કાર્ડ',
      call: 'કોલ કરો',
      whatsapp: 'વોટ્સએપ',
      email: 'ઇમેઇલ મોકલો',
      directions: 'ઓફિસ સરનામું',
      shareCard: 'શેર / QR',
      showQR: 'સ્કેન / શેર QR',
      bookConsultation: 'સલાહ માટે બુક કરો',
      searchPlaceholder: 'ટેક્સ, જીએસટી, એકાઉન્ટિંગ, કંપની સેવાઓ શોધો...',
      filterAll: 'બધી સેવાઓ',
      filterTax: 'ઇન્કમટેક્સ',
      filterGst: 'જીએસટી',
      filterAcc: 'એકાઉન્ટિંગ',
      filterMca: 'કંપની અને MCA',
      filterAdv: 'બિઝનેસ સલાહ',
      filterNgo: 'એનજીઓ / ટ્રસ્ટ',
      filterOther: 'અન્ય સેવાઓ',
      servicesTitle: 'અમારી વ્યાવસાયિક સેવાઓ',
      servicesSub: 'તમામ નાણાકીય અને કાનૂની સેવાઓ એક જ જગ્યાએ',
      inquireBtn: 'વોટ્સએપ પર પૂછપરછ કરો',
      bookServiceBtn: 'સેવા પસંદ કરો',
      complianceCalendar: 'મહત્વપૂર્ણ ટેક્સ તારીખો',
      complianceSub: 'આગામી સરકારી અને ટેક્સ પાલન તારીખો',
      calculatorTitle: 'અંદાજિત ફી કેલ્ક્યુલેટર',
      calculatorSub: 'તમારા વ્યવસાય માટે પારદર્શક ફીનો અંદાજ મેળવો',
      selectServiceType: 'જરૂરી સેવા પસંદ કરો:',
      selectClientType: 'વ્યવસાય / એકમ પ્રકાર:',
      estimatedFee: 'શરૂઆતનો અંદાજ:',
      getExactQuote: 'વોટ્સએપ પર વિગતવાર ભાવ મેળવો',
      reviewsTitle: 'ગ્રાહકોના પ્રતિભાવો',
      reviewsSub: 'ગુજરાત અને ભારતના 500+ થી વધુ વ્યવસાયોનો વિશ્વાસ',
      connectTitle: 'સોશિયલ મીડિયા પર જોડાઓ',
      connectSub: 'ટેક્સ અપડેટ્સ અને નિયમો માટે ફોલો કરો',
      hoursLabel: 'ઓફિસ સમય:',
      hoursVal: 'સોમ - શનિ: 10:00 AM - 7:30 PM',
      statsClients: '500+ સંતુષ્ટ ગ્રાહકો',
      statsCompliance: '100% નિયમ પાલન',
      statsExp: '10+ વર્ષનો અનુભવ',
      statsRating: '4.9★ રેટિંગ',
      pillar1: 'નિષ્ણાત માર્ગદર્શન',
      pillar2: 'ચોકસાઈ અને નિયમ પાલન',
      pillar3: 'વ્યક્તિગત સલાહ',
      pillar4: 'વ્યવસાય વૃદ્ધિ સહાય',
      pillar5: 'સમયસર સેવા',
      modalConsultTitle: 'નિઃશુલ્ક પરામર્શ બુક કરો',
      modalShareTitle: 'શેર અને સ્કેન ડિજિટલ કાર્ડ',
      qrScanInstruction: 'AB & Associate નું ડિજિટલ કાર્ડ ખોલવા માટે કોઈપણ ફોન કેમેરાથી સ્કેન કરો.',
      copyLinkBtn: 'કાર્ડ લિંક કોપી કરો',
      nameField: 'તમારું પૂરું નામ',
      phoneField: 'મોબાઇલ નંબર',
      serviceField: 'જરૂરી સેવા',
      msgField: 'વિગત / સંદેશ (વૈકલ્પિક)',
      submitConsult: 'વોટ્સએપ પર વિનંતી મોકલો',
      copiedToast: 'લિંક કોપી થઈ ગઈ છે!',
      vcardToast: 'કોન્ટેક્ટ ફાઇલ (.vcf) ડાઉનલોડ થઈ!',
      footerCommitment: 'કરવેરા સલાહ અને વ્યાપારિક કાયદાકીય પાલનમાં શ્રેષ્ઠતા પ્રદાન કરવા માટે પ્રતિબદ્ધ.'
    },
    hi: {
      langName: 'हिंदी',
      langCode: 'HI',
      tagline: 'आपकी प्रगति, हमारा संकल्प',
      pillars: 'टैक्स | अकाउंटिंग | सलाहकार | अनुपालन',
      saveContact: 'संपर्क सहेजें (vCard)',
      saveContactShort: 'सेव कार्ड',
      call: 'कॉल करें',
      whatsapp: 'व्हाट्सएप',
      email: 'ईमेल भेजें',
      directions: 'स्थान देखें',
      shareCard: 'शेयर / QR',
      showQR: 'स्कैन / शेयर QR',
      bookConsultation: 'परामर्श बुक करें',
      searchPlaceholder: 'टैक्स, जीएसटी, अकाउंटिंग, कंपनी सेवाएं खोजें...',
      filterAll: 'सभी सेवाएं',
      filterTax: 'आयकर सेवाएं',
      filterGst: 'जीएसटी सेवाएं',
      filterAcc: 'अकाउंटिंग',
      filterMca: 'कंपनी एवं MCA',
      filterAdv: 'व्यापार परामर्श',
      filterNgo: 'एनजीओ / ट्रस्ट',
      filterOther: 'अन्य सेवाएं',
      servicesTitle: 'हमारी व्यावसायिक सेवाएं',
      servicesSub: 'व्यापक वित्तीय और कानूनी समाधान',
      inquireBtn: 'व्हाट्सएप पर पूछताछ करें',
      bookServiceBtn: 'सेवा चुनें',
      complianceCalendar: 'महत्वपूर्ण अनुपालन तिथियां',
      complianceSub: 'आगामी टैक्स एवं कानूनी अंतिम तिथियां',
      calculatorTitle: 'त्वरित शुल्क अनुमानक',
      calculatorSub: 'अपने व्यवसाय के लिए पारदर्शी शुल्क अनुमान प्राप्त करें',
      selectServiceType: 'आवश्यक सेवा चुनें:',
      selectClientType: 'व्यापार / इकाई प्रकार:',
      estimatedFee: 'प्रारंभिक अनुमान:',
      getExactQuote: 'व्हाट्सएप पर सटीक कोटेशन प्राप्त करें',
      reviewsTitle: 'ग्राहकों की समीक्षाएं',
      reviewsSub: 'गुजरात और भारत के 500+ से अधिक व्यवसायों का भरोसा',
      connectTitle: 'सोशल मीडिया पर जुड़ें',
      connectSub: 'नवीनतम टैक्स अपडेट और जानकारी के लिए फॉलो करें',
      hoursLabel: 'कार्यालय समय:',
      hoursVal: 'सोम - शनि: 10:00 AM - 7:30 PM',
      statsClients: '500+ संतुष्ट ग्राहक',
      statsCompliance: '100% अनुपालन',
      statsExp: '10+ वर्षों का अनुभव',
      statsRating: '4.9★ रेटिंग',
      pillar1: 'विशेषज्ञ मार्गदर्शन',
      pillar2: 'सटीकता एवं अनुपालन',
      pillar3: 'व्यक्तिगत परामर्श',
      pillar4: 'व्यापार विकास सहायता',
      pillar5: 'समय पर सेवा',
      modalConsultTitle: 'निःशुल्क परामर्श बुक करें',
      modalShareTitle: 'शेयर एवं स्कैन डिजिटल कार्ड',
      qrScanInstruction: 'AB & Associate का डिजिटल कार्ड खोलने हेतु किसी भी फोन कैमरे से स्कैन करें।',
      copyLinkBtn: 'कार्ड लिंक कॉपी करें',
      nameField: 'आपका पूरा नाम',
      phoneField: 'मोबाइल नंबर',
      serviceField: 'आवश्यक सेवा',
      msgField: 'विवरण / संदेश (वैकल्पिक)',
      submitConsult: 'व्हाट्सएप पर अनुरोध भेजें',
      copiedToast: 'लिंक कॉपी हो गया!',
      vcardToast: 'संपर्क फ़ाइल (.vcf) डाउनलोड हुई!',
      footerCommitment: 'कर परामर्श और व्यावसायिक कानूनी अनुपालन में उत्कृष्टता प्रदान करने हेतु संकल्पित।'
    }
  };

  // --- SERVICES DATABASE (7 SPECIALISED CATEGORIES) ---
  const SERVICES_DATA = [
    {
      id: '01',
      category: 'tax',
      icon: 'fa-solid fa-file-invoice-dollar',
      title: {
        en: 'Income Tax Services',
        gu: 'આવકવેરા (ઇન્કમટેક્સ) સેવાઓ',
        hi: 'आयकर (इनकम टैक्स) सेवाएं'
      },
      items: {
        en: [
          'Income Tax Return (ITR) Filing for Individuals, HUF, Firms & Companies',
          'Tax Planning & Tax Advisory for Maximum Legal Savings',
          'Income Tax Notices, Scrutiny & Replies Assistance',
          'Income Tax Appeals & Assessment Handling',
          'TDS Return Filing & TDS Compliance Management',
          'Form 26AS / AIS / TIS In-depth Review & Reconciliation',
          'Income Tax Refund & Outstanding Demand Management',
          'Tax Scrutiny, Assessment & Compliance Filing'
        ],
        gu: [
          'વ્યક્તિગત, HUF, પેઢી અને કંપનીઓ માટે ITR રિટર્ન ફાઇલિંગ',
          'મહત્તમ કર બચત માટે સચોટ ટેક્સ પ્લાનિંગ અને સલાહ',
          'ઇન્કમટેક્સ નોટિસ, તપાસ અને કાનૂની જવાબો તૈયાર કરવા',
          'ઇન્કમટેક્સ અપીલ અને એસેસમેન્ટ મેનેજમેન્ટ',
          'ટીડીએસ (TDS) રિટર્ન ફાઇલિંગ અને નિયમ પાલન',
          'ફોર્મ 26AS / AIS / TIS સંપૂર્ણ રિવ્યુ અને સમાધાન',
          'ઇન્કમટેક્સ રિફંડ અને જૂની ડિમાન્ડનું નિરાકરણ',
          'ટેક્સ સ્ક્રુટિની, એસેસમેન્ટ અને કાનૂની ફાઇલિંગ'
        ],
        hi: [
          'व्यक्तिगत, HUF, फर्म एवं कंपनियों के लिए ITR फाइलिंग',
          'अधिकतम टैक्स बचत हेतु टैक्स प्लानिंग एवं परामर्श',
          'इनकम टैक्स नोटिस एवं जांच हेतु जवाब तैयार करना',
          'इनकम टैक्स अपील एवं असेसमेंट प्रबंधन',
          'टीडीएस (TDS) रिटर्न फाइलिंग एवं अनुपालन',
          'फॉर्म 26AS / AIS / TIS समीक्षा एवं मिलान',
          'इनकम टैक्स रिफंड एवं पुरानी मांग (Demand) का निपटारा',
          'टैक्स स्क्रूटनी, असेसमेंट एवं कानूनी फाइलिंग'
        ]
      }
    },
    {
      id: '02',
      category: 'gst',
      icon: 'fa-solid fa-receipt',
      title: {
        en: 'GST Services',
        gu: 'જીએસટી (GST) સેવાઓ',
        hi: 'जीएसटी (GST) सेवाएं'
      },
      items: {
        en: [
          'New GST Registration & Composition Scheme Setup',
          'Monthly & Quarterly GST Return Filing (GSTR-1, GSTR-3B, CMP-08)',
          'Nil GST Return Filing with 100% Punctuality',
          'GST Cancellation, Surrender & Revocation of Cancelled GST',
          'GST Annual Return Filing (GSTR-9 & GSTR-9C Reconciliation)',
          'Input Tax Credit (ITC) Verification, Matching & Reconciliation',
          'GST Show Cause Notices, Scrutiny & Departmental Replies',
          'GST Registration Amendment (Core & Non-Core Fields)',
          'E-Invoice Generation & E-Way Bill Portal Assistance'
        ],
        gu: [
          'નવું જીએસટી રજીસ્ટ્રેશન અને કમ્પોઝિશન સ્કીમ સેટઅપ',
          'માસિક / ત્રિમાસિક જીએસટી રિટર્ન (GSTR-1, GSTR-3B, CMP-08)',
          'નિલ જીએસટી રિટર્ન સમયસર ફાઇલિંગ',
          'જીએસટી નંબર રદ્દીકરણ અને રદ્દ થયેલ નંબર પુનઃપ્રાપ્તિ (Revocation)',
          'જીએસટી વાર્ષિક રિટર્ન (GSTR-9 અને GSTR-9C રિકોન્સિલેશન)',
          'ઇનપુટ ટેક્સ ક્રેડિટ (ITC) વેરિફિકેશન અને મેળવણું',
          'જીએસટી નોટિસ અને વિભાગીય જવાબોની તૈયારી',
          'જીએસટી રજીસ્ટ્રેશન સુધારણા (Amendment)',
          'ઈ-ઇનવોઇસ અને ઈ-વે બિલ પોર્ટલ સહાય'
        ],
        hi: [
          'नया जीएसटी पंजीकरण एवं कंपोजिशन स्कीम सेटअप',
          'मासिक एवं त्रैमासिक जीएसटी रिटर्न (GSTR-1, GSTR-3B, CMP-08)',
          'निल जीएसटी रिटर्न समय पर फाइलिंग',
          'जीएसटी कैंसलेशन एवं निरस्त जीएसटी की बहाली (Revocation)',
          'जीएसटी वार्षिक रिटर्न (GSTR-9 एवं GSTR-9C समाधान)',
          'इनपुट टैक्स क्रेडिट (ITC) सत्यापन एवं मिलान',
          'जीएसटी नोटिस एवं विभागीय उत्तर तैयार करना',
          'जीएसटी पंजीकरण संशोधन (Amendment)',
          'ई-इनवॉइस एवं ई-वे बिल पोर्टल सहायता'
        ]
      }
    },
    {
      id: '03',
      category: 'acc',
      icon: 'fa-solid fa-calculator',
      title: {
        en: 'Accounting & Bookkeeping Services',
        gu: 'એકાઉન્ટિંગ અને બુકકીપિંગ સેવાઓ',
        hi: 'अकाउंटिंग एवं बहीखाता सेवाएं'
      },
      items: {
        en: [
          'End-to-end Bookkeeping & Accounting on Tally Prime / Zoho / Busy',
          'Monthly & Quarterly Financial Statements & Ledger Accounts',
          'Profit & Loss Account Preparation',
          'Comprehensive Balance Sheet Finalization',
          'Cash Flow Statement & Working Capital Analysis',
          'Bank Reconciliation Statement (BRS)',
          'Accounts Receivable & Accounts Payable Management',
          'Customised MIS Reports & Financial Analytics for Management'
        ],
        gu: [
          'ટેલી પ્રાઇમ / ઝોહો / બીઝી પર સંપૂર્ણ એકાઉન્ટિંગ અને બુકકીપિંગ',
          'માસિક અને ત્રિમાસિક નાણાકીય હિસાબો અને ખાતાવહી',
          'નફો અને નુકસાન ખાતું (Profit & Loss A/c) તૈયારી',
          'સંપૂર્ણ બેલેન્સ શીટ ફાઇનલાઇઝેશન',
          'કેશ ફ્લો સ્ટેટમેન્ટ અને કાર્યકારી મૂડી વિશ્લેષણ',
          'બેંક સમાધાન પત્રક (BRS)',
          'ગ્રાહકો પાસેથી ઉઘરાણી (Receivables) અને ચૂકવણી (Payables) સંચાલન',
          'સંચાલન માટે કસ્ટમ MIS અહેવાલો અને નાણાકીય આંકડા'
        ],
        hi: [
          'टैली प्राइम / ज़ोहो / बिज़ी पर संपूर्ण बहीखाता एवं लेखांकन',
          'मासिक एवं त्रैमासिक वित्तीय विवरण एवं खाता बही',
          'लाभ एवं हानि खाता (Profit & Loss A/c) निर्माण',
          'व्यापक बैलेंस शीट अंतिम रूप देना',
          'कैश फ्लो स्टेटमेंट एवं कार्यशील पूंजी विश्लेषण',
          'बैंक समाधान विवरण (BRS)',
          'प्राप्य एवं देय (Receivables & Payables) खाता प्रबंधन',
          'प्रबंधन हेतु विशेष एमआईएस (MIS) रिपोर्ट'
        ]
      }
    },
    {
      id: '04',
      category: 'mca',
      icon: 'fa-solid fa-building-shield',
      title: {
        en: 'Company & MCA Compliance',
        gu: 'કંપની નોંધણી અને એમસીએ (MCA) પાલન',
        hi: 'कंपनी पंजीकरण एवं एमसीए (MCA) अनुपालन'
      },
      items: {
        en: [
          'Private Limited, OPC & Public Company Incorporation',
          'LLP (Limited Liability Partnership) Registration',
          'Partnership Firm Registration & Partnership Deed Drafting',
          'MCA Annual Return Filings (AOC-4, MGT-7/7A)',
          'Director KYC (DIR-3 KYC) & DIN Application',
          'Drafting Board Resolutions, Notices & Minutes of Meetings',
          'Statutory Registers & Company Records Maintenance',
          'Company Closure / Fast Track Exit (STK-2 Strike-Off)'
        ],
        gu: [
          'પ્રાઇવેટ લિમિટેડ, ઓપીસી અને પબ્લિક કંપની રજીસ્ટ્રેશન',
          'એલએલપી (LLP) નોંધણી અને કરાર તૈયાર કરવો',
          'ભાગીદારી પેઢી (Partnership) નોંધણી અને ડીડ ડ્રાફ્ટિંગ',
          'એમસીએ વાર્ષિક રિટર્ન ફાઇલિંગ (AOC-4, MGT-7)',
          'ડાયરેક્ટર કેવાયસી (DIR-3 KYC) અને DIN નંબર મેળવવો',
          'બોર્ડ ઠરાવો, મીટિંગ મિનિટ્સ અને નોટિસ ડ્રાફ્ટિંગ',
          'કંપની વૈધાનિક રજિસ્ટર અને રેકોર્ડ્સ જાળવણી',
          'કંપની બંધ કરવાની પ્રક્રિયા (Strike-Off / Fast Track Exit)'
        ],
        hi: [
          'प्राइवेट लिमिटेड, ओपीसी एवं पब्लिक कंपनी निगमन',
          'एलएलपी (LLP) पंजीकरण एवं डीड निर्माण',
          'पार्टनरशिप फर्म पंजीकरण एवं डीड ड्राफ्टिंग',
          'एमसीए वार्षिक रिटर्न फाइलिंग (AOC-4, MGT-7)',
          'निदेशक केवाईसी (DIR-3 KYC) एवं डीआईएन आवेदन',
          'बोर्ड प्रस्ताव, मिनट्स एवं बैठक नोटिस का मसौदा',
          'वैधानिक रजिस्टर एवं कंपनी रिकॉर्ड रखरखाव',
          'कंपनी बंद करने की प्रक्रिया (Strike-Off / Fast Track Exit)'
        ]
      }
    },
    {
      id: '05',
      category: 'adv',
      icon: 'fa-solid fa-chart-line',
      title: {
        en: 'Business Advisory',
        gu: 'બિઝનેસ અને નાણાકીય સલાહકાર',
        hi: 'व्यापार एवं वित्तीय परामर्श'
      },
      items: {
        en: [
          'Strategic Business Setup, Structuring & Entity Selection',
          'Comprehensive Financial Planning & Budgeting',
          'Tax-Efficient Business Planning & Structure Optimisation',
          'Detailed Project Reports (DPR) & CMA Data for Bank Financing',
          'Bank Loan Documentation, CC / Term Loan Proposal Preparation',
          'Business Compliance Health Check & Legal Risk Review',
          'Virtual CFO & Strategic Financial Management Consultancy'
        ],
        gu: [
          'નવા બિઝનેસ સ્થાપના, માળખું અને શ્રેષ્ઠ મોડેલ પસંદગી',
          'સંપૂર્ણ નાણાકીય આયોજન અને બજેટિંગ',
          'ટેક્સ-કાર્યક્ષમ વ્યાપાર આયોજન અને કર બચત માળખું',
          'બેંક લોન માટે વિગતવાર પ્રોજેક્ટ રિપોર્ટ (DPR) અને CMA ડેટા',
          'સીસી લિમિટ / ટર્મ લોન બેંક દસ્તાવેજીકરણ',
          'બિઝનેસ કાનૂની પાલન હેલ્થચેક અને જોખમ સમીક્ષા',
          'વર્ચ્યુઅલ સીએફઓ (Virtual CFO) અને નાણાકીય કન્સલ્ટન્સી'
        ],
        hi: [
          'रणनीतिक व्यवसाय सेटअप एवं संरचना चयन',
          'व्यापक वित्तीय योजना एवं बजट प्रबंधन',
          'टैक्स-कुशल व्यवसाय योजना एवं संरचना अनुकूलन',
          'बैंक लोन हेतु विस्तृत प्रोजेक्ट रिपोर्ट (DPR) एवं CMA डेटा',
          'बैंक लोन दस्तावेज, सीसी एवं टर्म लोन प्रस्ताव',
          'व्यावसायिक अनुपालन स्वास्थ्य जांच एवं कानूनी समीक्षा',
          'वर्चुअल सीएफओ (Virtual CFO) एवं रणनीतिक परामर्श'
        ]
      }
    },
    {
      id: '06',
      category: 'ngo',
      icon: 'fa-solid fa-hands-holding-child',
      title: {
        en: 'NGO / Trust / Society Services',
        gu: 'ટ્રસ્ટ / એનજીઓ / સોસાયટી સેવાઓ',
        hi: 'ट्रस्ट / एनजीઓ / सोसाइटी सेवाएं'
      },
      items: {
        en: [
          'Trust, Society & Section 8 Non-Profit Company Registration',
          '12A / 12AB Income Tax Exemption Registration & Renewal',
          '80G Registration for Tax Deduction to Donors',
          'NGO Statutory Compliance & Annual Return Filings',
          'Form 10B / 10BB Statutory Filing & Reporting',
          'CSR (Corporate Social Responsibility) Registration & Documentation',
          'NGO Project Reports, Grant Proposals & Fund Utilization Statements',
          'Annual Accounts Finalization & Reporting for Charitable Institutions'
        ],
        gu: [
          'ટ્રસ્ટ, સોસાયટી અને સેક્શન 8 નોન-પ્રોફિટ કંપની રજીસ્ટ્રેશન',
          'ઇન્કમટેક્સ કલમ 12A / 12AB કરમુક્તિ નોંધણી અને નવીકરણ',
          'દાતાઓ માટે 80G કર મુક્તિ મંજૂરી મેળવવી',
          'એનજીઓ વાર્ષિક પાલન અને કાનૂની રિટર્ન ફાઇલિંગ',
          'ફોર્મ 10B / 10BB વાર્ષિક ફાઇલિંગ અને રિપોર્ટિંગ',
          'સીએસઆર (CSR) રજીસ્ટ્રેશન અને દસ્તાવેજો',
          'ગ્રાન્ટ અને પ્રોજેક્ટ રિપોર્ટ તેમજ ફંડ વપરાશ પત્રક',
          'ચેરીટેબલ સંસ્થાઓના વાર્ષિક હિસાબો ફાઇનલાઇઝેશન'
        ],
        hi: [
          'ट्रस्ट, सोसाइटी एवं धारा 8 गैर-लाभकारी कंपनी पंजीकरण',
          'आयकर धारा 12A / 12AB कर छूट पंजीकरण एवं नवीनीकरण',
          'दानदाताओं हेतु 80G कर छूट अनुमोदन',
          'एनजीओ वार्षिक अनुपालन एवं रिटर्न फाइलिंग',
          'फॉर्म 10B / 10BB वैधानिक रिपोर्ट तैयार करना व फाइल करना',
          'सीएसआर (CSR) पंजीकरण एवं दस्तावेज प्रबंधन',
          'अनुदान प्रस्ताव, प्रोजेक्ट रिपोर्ट एवं निधि उपयोग विवरण',
          'चैरिटेबल संस्थाओं के वार्षिक वित्तीय खाते प्रबंधन'
        ]
      }
    },
    {
      id: '07',
      category: 'other',
      icon: 'fa-solid fa-stamp',
      title: {
        en: 'Other Professional Services',
        gu: 'અન્ય મહત્વપૂર્ણ વ્યાવસાયિક સેવાઓ',
        hi: 'अन्य महत्वपूर्ण व्यावसायिक सेवाएं'
      },
      items: {
        en: [
          'New PAN Card & TAN Allotment & Correction Services',
          'Digital Signature Certificate (DSC Class 3 - Signing & Encryption)',
          'Professional Tax (PT) Registration, Enrollment & Annual Returns',
          'MSME / Udyam Registration for Government Subsidies & Benefits',
          'FSSAI Food License & General Business Licenses',
          'Trademark (TM) Search, Application & IP Filing Assistance',
          'Commercial Agreements, Affidavits & Legal Documentation',
          'Other Regulatory Approvals, Import-Export Code (IEC) & Licences'
        ],
        gu: [
          'નવું પાન કાર્ડ (PAN) અને ટેન (TAN) નોંધણી તેમજ સુધારા સેવા',
          'ડિજિટલ સિગ્નેચર સર્ટિફિકેટ (DSC Class 3)',
          'પ્રોફેશનલ ટેક્સ (PT) રજીસ્ટ્રેશન અને વાર્ષિક રિટર્ન',
          'સરકારી યોજનાઓ માટે MSME / ઉદ્યમ રજીસ્ટ્રેશન',
          'FSSAI ફૂડ લાયસન્સ અને વેપાર પરવાના',
          'ટ્રેડમાર્ક (TM) એપ્લિકેશન અને બ્રાન્ડ સુરક્ષા સહાય',
          'કાનૂની એગ્રીમેન્ટ્સ, સોગંદનામા અને દસ્તાવેજીકરણ',
          'ઈમ્પોર્ટ-એક્સપોર્ટ કોડ (IEC) અને અન્ય સરકારી મંજૂરીઓ'
        ],
        hi: [
          'नया पैन कार्ड (PAN) एवं टैन (TAN) आवंटन व संशोधन',
          'डिजिटल सिग्नेचर सर्टिफिकेट (DSC Class 3)',
          'प्रोफेशनल टैक्स (PT) पंजीकरण एवं रिटर्न',
          'सरकारी लाभों हेतु एमएसएमई (MSME) / उद्यम पंजीकरण',
          'एफएसएसएआई (FSSAI) फूड लाइसेंस एवं व्यवसाय अनुमतियां',
          'ट्रेडमार्क (TM) आवेदन एवं ब्रांड सुरक्षा सहायता',
          'व्यावसायिक समझौते, हलफनामे (Affidavit) व कानूनी दस्तावेज',
          'इम्पोर्ट-एक्सपोर्ट कोड (IEC) एवं अन्य सरकारी स्वीकृतियां'
        ]
      }
    }
  ];

  // --- COMPLIANCE DATES DATABASE ---
  const COMPLIANCE_DEADLINES = [
    { name: 'GSTR-3B Return Filing', sub: 'Monthly GST Tax Return', date: '20th of Every Month', category: 'GST' },
    { name: 'GSTR-1 Outward Supplies', sub: 'Monthly Sales Details', date: '11th of Every Month', category: 'GST' },
    { name: 'TDS Payment Deposit', sub: 'Monthly Tax Deducted at Source', date: '7th of Every Month', category: 'Income Tax' },
    { name: 'Quarterly Advance Tax', sub: 'Installment for Individuals & Corporates', date: '15th Jun / Sep / Dec / Mar', category: 'Income Tax' },
    { name: 'Income Tax Return (ITR)', sub: 'Individual, HUF & Business Tax Returns', date: '31st July Annually', category: 'Income Tax' },
    { name: 'MCA Director KYC (DIR-3)', sub: 'Annual Director KYC for All DIN Holders', date: '30th September', category: 'MCA' }
  ];

  // --- CLIENT TESTIMONIALS ---
  const TESTIMONIALS = [
    {
      name: 'Rajesh Patel',
      role: 'Director, Skywing Engineering',
      city: 'Ahmedabad',
      text: 'AB & Associate has been managing our GST and Company MCA filings flawlessly for over 3 years. Their prompt advice saved us significant tax legally. Highly recommended!',
      stars: 5,
      avatar: 'RP'
    },
    {
      name: 'Mitesh Shah',
      role: 'Founder, Retail Pharma Chain',
      city: 'Ahmedabad',
      text: 'ખૂબ જ ઝડપી અને વિશ્વાસપાત્ર સર્વિસ! અમારી કંપનીનું ITR અને એકાઉન્ટિંગ એકદમ સચોટ રીતે હેન્ડલ કરે છે. કોઈ પણ પ્રશ્નમાં તરત જ માર્ગદર્શન મળે છે.',
      stars: 5,
      avatar: 'MS'
    },
    {
      name: 'Pooja Agarwal',
      role: 'Managing Trustee, Hope Life Foundation',
      city: 'Ahmedabad',
      text: '12A aur 80G registration ke liye AB & Associate se behtar koi guidance nahi de sakta. Accurate documentation aur complete transparency ke sath kaam kiya inhone.',
      stars: 5,
      avatar: 'PA'
    }
  ];

  // --- STATE MANAGEMENT ---
  let currentLang = localStorage.getItem('ab_lang') || 'en';
  let currentTheme = localStorage.getItem('ab_theme') || 'dark';

  // --- THEME ENGINE ---
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ab_theme', theme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    }
  }

  // --- LANGUAGE ENGINE ---
  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('ab_lang', lang);

    const curLangLabel = document.getElementById('currentLangLabel');
    if (curLangLabel) curLangLabel.textContent = I18N[lang].langCode;

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('selected', btn.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) {
        elem.textContent = I18N[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
      const key = elem.getAttribute('data-i18n-placeholder');
      if (I18N[lang] && I18N[lang][key]) {
        elem.setAttribute('placeholder', I18N[lang][key]);
      }
    });

    renderServicesList();
    populateServiceSelects();
  }

  // --- RENDER SERVICES LIST ---
  function renderServicesList(filterCategory = 'all', searchQuery = '') {
    const container = document.getElementById('servicesListGrid');
    if (!container) return;

    const query = searchQuery.trim().toLowerCase();
    let filtered = SERVICES_DATA.filter(svc => {
      const matchCat = filterCategory === 'all' || svc.category === filterCategory;
      if (!matchCat) return false;
      if (!query) return true;

      const title = (svc.title[currentLang] || svc.title.en).toLowerCase();
      const itemsText = (svc.items[currentLang] || svc.items.en).join(' ').toLowerCase();
      return title.includes(query) || itemsText.includes(query);
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding: 30px 15px; color: var(--text-muted); background: var(--bg-card); border-radius: 16px; border: 1px dashed var(--glass-border);">
          <i class="fa-solid fa-search" style="font-size: 2rem; margin-bottom: 8px; color: var(--gold-primary);"></i>
          <p style="font-size: 0.9rem; font-weight:700;">No matching service found for "${searchQuery}"</p>
          <button class="save-contact-btn" style="width:auto; margin: 12px auto 0 auto; padding: 8px 16px; font-size:0.82rem;" onclick="window.location.href='${BUSINESS_INFO.whatsappUrl}?text=Hello%20AB%20%26%20Associate,%20I%20need%20custom%20service%20inquiry'">
            <i class="fa-brands fa-whatsapp"></i> Ask directly on WhatsApp
          </button>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach((svc, index) => {
      const title = svc.title[currentLang] || svc.title.en;
      const items = svc.items[currentLang] || svc.items.en;
      const itemsCount = items.length;

      const isOpen = searchQuery.length > 0 && index === 0;

      html += `
        <div class="service-card ${isOpen ? 'open' : ''}" data-service-id="${svc.id}" data-category="${svc.category}">
          <div class="service-card-header" onclick="window.AB_APP.toggleServiceCard('${svc.id}')">
            <div class="service-card-left">
              <div class="service-num-badge">${svc.id}</div>
              <div class="service-card-icon"><i class="${svc.icon}"></i></div>
              <div>
                <h3 class="service-title-text">${title}</h3>
                <span class="service-items-count">${itemsCount} Specialised Solutions</span>
              </div>
            </div>
            <i class="fa-solid fa-chevron-down service-chevron"></i>
          </div>

          <div class="service-card-body">
            <div class="service-items-list">
              ${items.map(it => `
                <div class="service-item-row">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>${it}</span>
                </div>
              `).join('')}
            </div>
            <div class="service-action-bar">
              <button class="service-inquire-btn" onclick="window.AB_APP.inquireService('${encodeURIComponent(title)}')">
                <i class="fa-brands fa-whatsapp"></i> ${I18N[currentLang].inquireBtn}
              </button>
              <button class="service-book-btn" onclick="window.AB_APP.openConsultModal('${encodeURIComponent(title)}')">
                <i class="fa-regular fa-calendar-check"></i> ${I18N[currentLang].bookServiceBtn}
              </button>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // --- POPULATE SERVICE SELECT OPTIONS ---
  function populateServiceSelects() {
    const modalSelect = document.getElementById('consultServiceSelect');
    const calcSelect = document.getElementById('calcServiceSelect');

    const optionsHtml = SERVICES_DATA.map(svc => {
      const title = svc.title[currentLang] || svc.title.en;
      return `<option value="${title}">${svc.id}. ${title}</option>`;
    }).join('');

    if (modalSelect) {
      modalSelect.innerHTML = `<option value="">-- Choose Service --</option>` + optionsHtml;
    }
    if (calcSelect) {
      calcSelect.innerHTML = optionsHtml;
    }
  }

  // --- RENDER COMPLIANCE CALENDAR ---
  function renderComplianceCalendar() {
    const container = document.getElementById('calendarDeadlineList');
    if (!container) return;

    let html = '';
    COMPLIANCE_DEADLINES.forEach(item => {
      html += `
        <div class="deadline-item">
          <div class="deadline-info">
            <span class="deadline-name">${item.name}</span>
            <span class="deadline-sub">${item.sub}</span>
          </div>
          <span class="deadline-date-pill">${item.date}</span>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // --- RENDER TESTIMONIALS ---
  function renderTestimonials() {
    const container = document.getElementById('testimonialsList');
    if (!container) return;

    let html = '';
    TESTIMONIALS.forEach(t => {
      html += `
        <div class="testimonial-card">
          <div class="test-header">
            <div class="test-user">
              <div class="test-avatar">${t.avatar}</div>
              <div class="test-meta">
                <span class="test-name">${t.name}</span>
                <span class="test-org">${t.role} • ${t.city}</span>
              </div>
            </div>
            <div class="test-stars">
              ${'★'.repeat(t.stars)}
            </div>
          </div>
          <p class="test-text">"${t.text}"</p>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // --- VCARD (.VCF) GENERATOR & DOWNLOAD ENGINE ---
  function generateAndDownloadVCF() {
    const vcardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:AB & Associate',
      'ORG:AB & Associate (Tax, Accounting, Advisory, Compliance)',
      'TITLE:Tax & Corporate Consultants',
      'TEL;TYPE=WORK,VOICE:' + BUSINESS_INFO.phone,
      'TEL;TYPE=CELL,VOICE:' + BUSINESS_INFO.phone,
      'EMAIL;TYPE=PREF,INTERNET:' + BUSINESS_INFO.email,
      'URL:' + window.location.href,
      'ADR;TYPE=WORK:;;Ahmedabad;Gujarat;;;India',
      'NOTE:AB & Associate - Tax, Accounting, Advisory, Compliance. "Your Growth, Our Commitment". Phone: 99745 74539 | Email: abassociate039@gmail.com',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'AB_and_Associate_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast(I18N[currentLang].vcardToast);
  }

  // --- DYNAMIC QR CODE ENGINE ---
  function renderSvgQrCode(targetElementId, content) {
    const target = document.getElementById(targetElementId);
    if (!target) return;

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(content)}&color=050b14&bgcolor=ffffff&margin=1`;
    target.innerHTML = `<img src="${qrUrl}" alt="AB & Associate QR Code" style="width:100%; height:100%; border-radius: 8px; display:block;" onerror="this.src='https://chart.googleapis.com/chart?chs=240x240&cht=qr&chl=${encodeURIComponent(content)}&choe=UTF-8'">`;
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // --- 3D CARD PARALLAX & TILT PHYSICS ---
  function init3DCardPhysics() {
    const cardWrap = document.getElementById('nfcCardContainer');
    if (!cardWrap) return;

    cardWrap.addEventListener('click', function (e) {
      if (e.target.closest('button') || e.target.closest('a')) return;
      cardWrap.classList.toggle('is-flipped');
    });

    cardWrap.addEventListener('mousemove', function (e) {
      if (cardWrap.classList.contains('is-flipped')) return;
      const rect = cardWrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 16;
      const rotateY = (x / rect.width) * 16;
      cardWrap.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    cardWrap.addEventListener('mouseleave', function () {
      if (!cardWrap.classList.contains('is-flipped')) {
        cardWrap.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    });

    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== 'function') {
      window.addEventListener('deviceorientation', function (e) {
        if (cardWrap.classList.contains('is-flipped') || !e.gamma || !e.beta) return;
        const tiltX = Math.min(Math.max(e.gamma, -20), 20) / 2;
        const tiltY = Math.min(Math.max(e.beta - 45, -20), 20) / 2;
        cardWrap.style.transform = `perspective(1000px) rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
      });
    }
  }

  // --- ESTIMATOR FEE CALCULATOR ---
  function updateFeeEstimate() {
    const serviceVal = document.getElementById('calcServiceSelect')?.value || '';
    const clientType = document.getElementById('calcClientType')?.value || 'individual';
    const resultBox = document.getElementById('calcResultVal');
    if (!resultBox) return;

    let base = '₹999*';
    if (serviceVal.includes('Income Tax') || serviceVal.includes('આવકવેરા') || serviceVal.includes('आयकर')) {
      base = clientType === 'company' ? '₹3,499*' : clientType === 'partnership' ? '₹1,999*' : '₹799*';
    } else if (serviceVal.includes('GST') || serviceVal.includes('જીએસટી')) {
      base = clientType === 'company' ? '₹1,499/mo*' : '₹999/mo*';
    } else if (serviceVal.includes('Company') || serviceVal.includes('કંપની')) {
      base = '₹4,999* + Govt Fees';
    } else if (serviceVal.includes('Accounting') || serviceVal.includes('એકાઉન્ટિંગ')) {
      base = clientType === 'company' ? '₹4,000/mo*' : '₹2,000/mo*';
    } else if (serviceVal.includes('NGO') || serviceVal.includes('ટ્રસ્ટ')) {
      base = '₹5,999*';
    } else {
      base = '₹999*';
    }

    resultBox.textContent = base;
  }

  // --- MODAL CONTROLLERS ---
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- SAFE SHARING CONTROLLERS (NEVER CRASHES LOCAL BROWSER) ---
  function openShareAndScannerModal() {
    openModal('shareModal');
  }

  function copyCurrentLink() {
    const shareUrl = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast(I18N[currentLang].copiedToast);
      }).catch(() => {
        prompt('Copy Link:', shareUrl);
      });
    } else {
      prompt('Copy Link:', shareUrl);
    }
  }

  function shareOnWhatsApp() {
    const text = `Check out *AB & Associate* (Tax, Accounting, Advisory, Compliance) in Ahmedabad:\n${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  }

  function shareOnFacebook() {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  }

  // --- INITIALIZE DOM & EVENT LISTENERS ---
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Initialize Themes & Languages
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    // 2. Render Widgets & QR
    renderComplianceCalendar();
    renderTestimonials();
    renderSvgQrCode('cardBackQr', window.location.href);
    renderSvgQrCode('shareQrDisplay', window.location.href);
    updateFeeEstimate();

    // 3. Card Physics
    init3DCardPhysics();

    // 4. Language Dropdown Toggle
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
      });
      document.addEventListener('click', function () {
        langDropdown.classList.remove('active');
      });
      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', function () {
          const selected = this.getAttribute('data-lang');
          applyLanguage(selected);
          langDropdown.classList.remove('active');
        });
      });
    }

    // 5. Theme Toggle Button
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    // 6. Search & Filter
    const searchInput = document.getElementById('serviceSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const query = this.value;
        const activeChip = document.querySelector('.filter-chip.active');
        const cat = activeChip ? activeChip.getAttribute('data-cat') : 'all';
        renderServicesList(cat, query);
      });
    }

    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', function () {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const cat = this.getAttribute('data-cat');
        const query = searchInput ? searchInput.value : '';
        renderServicesList(cat, query);
      });
    });

    // 7. Calculator Select Changes
    const calcService = document.getElementById('calcServiceSelect');
    const calcClient = document.getElementById('calcClientType');
    if (calcService) calcService.addEventListener('change', updateFeeEstimate);
    if (calcClient) calcClient.addEventListener('change', updateFeeEstimate);

    // 8. Modal Overlay Click-to-close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function (e) {
        if (e.target === this) {
          closeModal(this.id);
        }
      });
    });

    // 9. Consultation Form Submission -> Direct WhatsApp
    const consultForm = document.getElementById('consultationForm');
    if (consultForm) {
      consultForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('clientName')?.value || 'Client';
        const phone = document.getElementById('clientPhone')?.value || '';
        const service = document.getElementById('consultServiceSelect')?.value || 'Tax & Advisory';
        const msg = document.getElementById('clientNotes')?.value || 'None';

        const text = `*New Consultation Request*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📌 *Service:* ${service}\n💬 *Details:* ${msg}\n\n_Sent via AB & Associate Digital Card_`;
        const waUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
        
        window.open(waUrl, '_blank');
        closeModal('consultModal');
        showToast('Redirecting to WhatsApp...');
      });
    }
  });

  // --- GLOBAL EXPOSED CONTROLLER METHODS ---
  window.AB_APP = {
    toggleServiceCard: function (id) {
      const card = document.querySelector(`[data-service-id="${id}"]`);
      if (card) card.classList.toggle('open');
    },
    inquireService: function (encodedServiceName) {
      const name = decodeURIComponent(encodedServiceName);
      const text = `Hello AB & Associate, I would like to inquire about *${name}* services. Please share details and procedure.`;
      window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
    },
    openConsultModal: function (prefillService) {
      if (prefillService) {
        const decoded = decodeURIComponent(prefillService);
        const sel = document.getElementById('consultServiceSelect');
        if (sel) {
          for (let opt of sel.options) {
            if (opt.text.includes(decoded) || decoded.includes(opt.value)) {
              sel.value = opt.value;
              break;
            }
          }
        }
      }
      openModal('consultModal');
    },
    downloadVcf: generateAndDownloadVCF,
    shareProfile: openShareAndScannerModal,
    copyLink: copyCurrentLink,
    shareOnWhatsApp: shareOnWhatsApp,
    shareOnFacebook: shareOnFacebook,
    openModal: openModal,
    closeModal: closeModal,
    inquireQuote: function () {
      const svc = document.getElementById('calcServiceSelect')?.value || 'Tax & Advisory';
      const type = document.getElementById('calcClientType')?.value || 'Business';
      const est = document.getElementById('calcResultVal')?.textContent || '';
      const text = `Hello AB & Associate, I checked the estimate for *${svc}* (${type}) on your digital card: *${est}*. Please provide an exact quotation and next steps.`;
      window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

})();
