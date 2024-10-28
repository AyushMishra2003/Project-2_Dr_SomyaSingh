import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHeartbeat, FaSyringe, FaStethoscope, FaClipboardList, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion"; // For entrance animations
import { MdKeyboardArrowRight } from 'react-icons/md';

import AOS from 'aos'; // Import AOS as an asset
import 'aos/dist/aos.css'; // Import AOS styles


import img1 from '../../assets/Treatment/highrisk.jpg'
import img2 from '../../assets/Treatment/infertility.webp'
import img3 from '../../assets/Treatment/fetal.jpg'
import img4 from '../../assets/Treatment/cancerscreening.jpeg'
import img5 from '../../assets/Treatment/hysterectomy.jpg'
import img6 from '../../assets/Treatment/mtp.webp'
import img7 from '../../assets/Treatment/oncology.jpeg'
import img8 from '../../assets/Treatment/premarital.jpeg'
import img9 from '../../assets/Treatment/casarean.jpg'
import img10 from '../../assets/Treatment/planing.jpg'
import img12 from '../../assets/Treatment/mensu.png'
import img11 from '../../assets/Treatment/casarean.jpg'




import { Helmet } from 'react-helmet';

const BreadCrumbs = ({ items, headText ,image,text}) => {

  console.log(image);
  
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }} // Background image
      data-aos="fade-in" // Add AOS effect here
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Heading */}
      <h1 className="text-white text-center relative z-20 sora-600 px-4 mb-4" data-aos="fade-up">
        {headText}
      </h1>

      {/* Breadcrumb navigation */}
      <nav className="flex items-center relative z-20 space-x-1 px-4 text-gray-300 text-sm lg:text-base">
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-white">
                <MdKeyboardArrowRight className="text-lg lg:text-xl mt-[0.2rem]" />
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-white transition-colors"
                data-aos="fade-left" // Add AOS effect here
                data-aos-delay={index * 100} // Stagger effects
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-white" data-aos="fade-right">
                {text}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};


const services = [


    {
        id: 1,
        name: 'High-Risk Pregnancy',
        icon: <FaArrowAltCircleRight />,
        images: [img1], // Update with the appropriate image
        link: 'highriskpregnancy',
        description: `A high-risk pregnancy is one where the mother or baby is at a higher risk of health problems before, during, or after delivery. Factors may include maternal age, health conditions, or pregnancy complications.`,
        types: [
            {
                title: 'Preexisting Conditions',
                details: `Conditions such as diabetes, high blood pressure, or heart disease can increase the risks during pregnancy and require careful management.`,
            },
            {
                title: 'Pregnancy Complications',
                details: `Complications that develop during pregnancy, such as preeclampsia, gestational diabetes, or fetal growth restriction, can also classify a pregnancy as high-risk.`,
            },
        ],
        treatment: {
            overview: `Managing a high-risk pregnancy typically involves increased medical supervision and tailored care plans to ensure the health of both the mother and baby. Regular check-ups and monitoring are crucial.`,
            details: [
                {
                    title: 'Increased Monitoring',
                    description: `Frequent prenatal visits, specialized ultrasounds, and tests help monitor the health of both mother and fetus, allowing for timely intervention if needed.`,
                },
                {
                    title: 'Medications and Supplements',
                    description: `Certain medications may be necessary to manage preexisting conditions. Prenatal vitamins, particularly those containing folic acid, are also important for fetal development.`,
                },
                {
                    title: 'Lifestyle Adjustments',
                    description: `Making healthy lifestyle choices, such as maintaining a balanced diet, regular physical activity (as advised by a healthcare provider), and avoiding harmful substances like tobacco and alcohol, is crucial for managing high-risk pregnancies.`,
                },
                {
                    title: 'Specialized Care',
                    description: `Referral to specialists such as maternal-fetal medicine experts may be necessary for more complex cases, ensuring comprehensive care tailored to specific risks.`,
                },
            ],
        },
        causes: [
            'Maternal age (younger than 20 or older than 35).',
            'Preexisting medical conditions (e.g., hypertension, diabetes).',
            'History of pregnancy complications (e.g., preeclampsia, preterm labor).',
        ],
        symptoms: [
            'Vaginal bleeding or unusual discharge.',
            'Severe headaches or vision changes.',
            'Sudden swelling in the face or hands.',
        ],
    },
    
    {
        id: 2,
        name: 'Infertility Treatment',
        link: 'infertilitytreatment',
        icon: <FaArrowAltCircleRight />,
        images: [img2], // Replace with the relevant infertility image
        description: `Infertility treatment involves various medical interventions aimed at helping individuals and couples conceive. Factors contributing to infertility can range from hormonal imbalances to anatomical issues. A thorough evaluation is essential to determine the appropriate treatment plan.`,
        types: [
            {
                title: 'Ovulation Disorders',
                details: `Conditions affecting ovulation, such as polycystic ovary syndrome (PCOS) or hormonal imbalances, can hinder the release of eggs.`,
            },
            {
                title: 'Male Factor Infertility',
                details: `Issues such as low sperm count, poor sperm motility, or abnormal sperm morphology can contribute to infertility in males.`,
            },
            {
                title: 'Structural Problems',
                details: `Anatomical issues in the reproductive tract, such as blocked fallopian tubes or uterine abnormalities, can impact fertility.`,
            },
        ],
        treatment: {
            overview: `Infertility treatment encompasses a range of options including lifestyle changes, medications, and advanced reproductive technologies. The choice of treatment depends on the underlying causes of infertility and the specific needs of the couple.`,
            details: [
                {
                    title: 'Medications',
                    description: `Fertility medications can help stimulate ovulation and regulate hormonal imbalances. Common medications include clomiphene citrate and gonadotropins.`,
                },
                {
                    title: 'Assisted Reproductive Technologies (ART)',
                    description: `Techniques like in vitro fertilization (IVF) and intracytoplasmic sperm injection (ICSI) assist in achieving pregnancy when traditional methods fail.`,
                },
                {
                    title: 'Surgery',
                    description: `Surgical options may be necessary to correct structural issues affecting fertility, such as removing fibroids or repairing blocked tubes.`,
                },
                {
                    title: 'Lifestyle Modifications',
                    description: `Making healthy lifestyle changes, such as maintaining a balanced diet, exercising regularly, and managing stress, can improve fertility outcomes.`,
                },
            ],
        },
        causes: [
            `Infertility can be attributed to various factors, including hormonal imbalances, age, underlying medical conditions, and lifestyle choices.`,
            `Common causes include ovulation disorders, male factor infertility, age-related declines in fertility, and anatomical issues.`,
        ],
        symptoms: [
            `Symptoms of infertility can vary, but may include:`,
            `Irregular or absent menstrual cycles.`,
            `Unexplained weight changes.`,
            `Pain during intercourse.`,
            `A history of miscarriage or failed pregnancies.`,
        ],
      },
      
      {
        id: 3,
        name: 'Fetal Medicine',
        link: 'fetalmedicine',
        icon: <FaArrowAltCircleRight />,
        images: [img3], // Placeholder for your image variable
        description: `Fetal medicine focuses on managing high-risk pregnancies and diagnosing fetal conditions. Our specialized team offers comprehensive care for complex pregnancies involving advanced diagnostic techniques and treatment options.`,
      
        types: [
          {
            title: 'Fetal Congenital Conditions',
            details: `Conditions such as congenital heart defects and spina bifida that require specialized care during pregnancy and after birth.`,
          },
          {
            title: 'Maternal Health Complications',
            details: `Issues like gestational diabetes or high blood pressure that may affect the mother and baby during pregnancy.`,
          },
          {
            title: 'Intrauterine Therapy',
            details: `Interventions conducted in the womb to treat certain fetal conditions, improving outcomes for both mother and baby.`,
          },
        ],
      
        treatment: {
          overview: `Treatment in fetal medicine includes a multidisciplinary approach with specialists collaborating to provide the best outcomes for mothers and their babies. This can include advanced imaging and surgical interventions as needed.`,
          
          details: [
            {
              title: 'Fetal Surgery',
              description: 'Minimally invasive surgical procedures performed in utero to treat various fetal conditions, improving chances of healthy delivery.',
            },
            {
              title: 'Intrauterine Blood Transfusion',
              description: 'A procedure used to treat fetal anemia by administering blood directly into the fetal circulation.',
            },
          ],
        },
      
        causes: [
          'Maternal age and genetic factors.',
          'Pre-existing maternal health conditions.',
          'Environmental factors and lifestyle choices.',
        ],
      
        symptoms: [
          'Increased fetal movement or lack thereof.',
          'Signs of maternal distress or complications.',
          'Abnormal findings in routine ultrasounds.',
        ],
      },
      
      {
        id: 4,
        name: 'Contraception Consultation',
        link: 'contraceptionconsultation',
        icon: <FaArrowAltCircleRight />,
        images: [img10], // Replace with the actual image variable
        description: 'Choosing the right birth control is crucial for your reproductive health. This consultation helps you explore various options available to you.',
        
        types: [
          {
            title: 'Barrier Methods',
            details: 'Includes male and female condoms, diaphragm, cervical cap, and contraceptive sponge. These methods physically block sperm from reaching the egg.',
          },
          {
            title: 'Short-acting Hormonal Methods',
            details: 'Includes birth control pills, vaginal ring (NuvaRing), skin patch (Xulane), and contraceptive injection (Depo-Provera). These methods need regular administration.',
          },
          {
            title: 'Long-acting Hormonal Methods',
            details: 'Includes copper IUD (ParaGard), hormonal IUD (Mirena, Skyla, Kyleena), and contraceptive implant (Nexplanon). They provide protection for several years.',
          },
          {
            title: 'Sterilization',
            details: 'A permanent birth control method, such as tubal ligation for women and vasectomy for men.',
          },
          {
            title: 'Fertility Awareness Methods',
            details: 'Focus on tracking fertility signs to avoid pregnancy during fertile periods.',
          },
        ],
      
        treatment: {
          overview: 'During your consultation, you’ll receive personalized recommendations based on your reproductive goals, health history, and lifestyle.',
          
          details: [
            {
              title: 'Effectiveness Assessment',
              description: 'Understanding how well each method works to prevent pregnancy and what to expect from each option.',
            },
            {
              title: 'Side Effects Discussion',
              description: 'Reviewing potential side effects associated with different contraceptive methods.',
            },
            {
              title: 'Lifestyle Compatibility',
              description: 'Evaluating how each method fits into your daily routine and personal preferences.',
            },
            {
              title: 'Reproductive Goals Evaluation',
              description: 'Discussing your current and future family planning needs to choose the best method.',
            },
            {
              title: 'STI Protection Review',
              description: 'Exploring which methods offer protection against sexually transmitted infections (STIs).',
            },
          ],
        },
      
        causes: [
          'Personal reproductive goals.',
          'Health history and potential contraindications.',
          'Lifestyle and convenience preferences.',
        ],
      
        symptoms: [
          'Interest in family planning.',
          'Desire to prevent pregnancy.',
          'Need for STI protection.',
        ],
      },
      
      {
        id: 5,
        name: 'Normal & Cesarean Delivery',
        link: 'normalcesareandelivery',
        icon: <FaArrowAltCircleRight />,
        images: [img11], // Replace with actual image variable
        description: `Normal and Cesarean deliveries are key methods of childbirth, each with its indications and considerations.`,
        types: [
            {
                title: 'Normal Delivery',
                details: `A vaginal birth where the baby is delivered through the birth canal. It is often preferred due to a quicker recovery time and lower risk of complications.`,
            },
            {
                title: 'Cesarean Delivery',
                details: `A surgical method of delivering the baby through incisions in the mother's abdomen and uterus, usually performed when a vaginal delivery is not safe.`,
            },
        ],
        treatment: {
            overview: `The choice between normal and cesarean delivery depends on various factors including maternal and fetal health, the position of the baby, and the presence of any complications.`,
            details: [
                {
                    title: 'Normal Delivery',
                    description: `Involves labor and vaginal delivery, typically monitored for complications. It is considered a natural process with less recovery time for the mother.`,
                },
                {
                    title: 'Cesarean Delivery',
                    description: `Indicated for complications such as fetal distress, multiple pregnancies, or previous cesarean sections. Recovery may take longer, and specific postoperative care is essential.`,
                },
            ],
        },
        causes: [
            'Health conditions that may complicate labor.',
            'The position of the baby in the womb.',
            'Multiple pregnancies (twins, triplets, etc.).',
        ],
        symptoms: [
            'Labor pains and contractions (for normal delivery).',
            'Signs of distress in the baby (for cesarean delivery).',
            'Water breaking (indicating the start of labor).',
        ],
    },
    
    {
        id: 7,
        name: 'Sustainable Menstruation',
        link: 'sustainablemenstruation',
        icon: <FaArrowAltCircleRight />,
        images: [img12], // Replace with actual image variable
        description: `Understanding the menstrual cycle can improve awareness of personal health and support sustainable lifestyle practices around menstruation. Tracking cycles, identifying irregularities, and knowing treatment options can make a significant difference.`,
        types: [
            {
                title: 'Cycle Length',
                details: `A typical menstrual cycle lasts between 21 and 35 days, with menstrual bleeding lasting 2 to 7 days. Variations are common, especially during adolescence and approaching menopause.`,
            },
            {
                title: 'Tracking Your Cycle',
                details: `Track start dates, end dates, flow, pain, and other changes. This helps recognize patterns and identify any irregularities in your cycle.`,
            },
        ],
        treatment: {
            overview: `Maintaining a balanced lifestyle and understanding one’s cycle can support menstrual health and sustainability. Medical or lifestyle adjustments may be recommended for irregularities or symptoms impacting quality of life.`,
            details: [
                {
                    title: 'Lifestyle Adjustments',
                    description: `Regular exercise, a balanced diet, and managing stress can help regulate cycles.`,
                },
                {
                    title: 'Medical Intervention',
                    description: `Certain birth control methods can regulate cycles or reduce heavy bleeding. Consulting a healthcare provider is recommended if there are underlying conditions.`,
                },
            ],
        },
        causes: [
            'Pregnancy or breastfeeding can delay or alter menstrual cycles.',
            'Eating disorders, extreme weight loss, and intense exercise can interrupt cycles.',
            'Hormonal disorders such as polycystic ovary syndrome (PCOS).',
            'Conditions like pelvic inflammatory disease (PID) or uterine fibroids.',
        ],
        symptoms: [
            'Irregular cycle patterns or sudden changes.',
            'Heavy menstrual bleeding or prolonged bleeding.',
            'Painful cramping or unusual pain during periods.',
            'Mood or physical changes around menstruation.',
        ],
    },
    
    

    
    {
        id: 8,
        name: 'Hysterectomy',
        link: 'hysterectomy',
        icon: <FaArrowAltCircleRight />, // Icon provided
        images: [img5], // Array of images
        description: `A hysterectomy is a surgical procedure to remove the uterus, sometimes including other reproductive organs like the cervix, ovaries, and fallopian tubes. It's often recommended for conditions like cancer, fibroids, chronic pain, or severe bleeding. This surgery can greatly relieve symptoms but also has significant impacts on reproductive health.`,
        types: [
          {
            title: 'Total Hysterectomy',
            details: `Removes both the uterus and cervix. It is one of the most common types and is often used to treat various conditions, including fibroids, endometriosis, or cancer.`,
          },
          {
            title: 'Partial Hysterectomy',
            details: `Also known as a subtotal or supracervical hysterectomy, this procedure removes only the upper part of the uterus, leaving the cervix intact.`,
          },
          {
            title: 'Radical Hysterectomy',
            details: `Involves the removal of the uterus, cervix, part of the vagina, and surrounding tissues. This procedure is typically done in cases of cervical cancer.`,
          },
        ],
        treatment: {
          overview: `Hysterectomy procedures are tailored to individual patient needs and may involve different approaches, such as abdominal, laparoscopic, or vaginal surgeries. Preoperative and postoperative care are essential for recovery.`,
          details: [
            {
              title: 'Surgical Options',
              description: `Approaches include abdominal hysterectomy (through an incision in the abdomen), laparoscopic hysterectomy (using minimally invasive tools), and vaginal hysterectomy.`,
            },
            {
              title: 'Hormone Therapy',
              description: `In cases where the ovaries are removed, hormone therapy may be used to manage symptoms associated with surgical menopause.`,
            },
          ],
        },
        causes: [
          'Cancer of the uterus, cervix, or ovaries.',
          'Large or painful fibroids causing severe symptoms.',
          'Endometriosis that doesn’t respond to other treatments.',
          'Uterine prolapse, where the uterus descends into the vaginal canal.',
          'Chronic pelvic pain stemming from the uterus or related conditions.',
        ],
        symptoms: [
          'Abnormal, heavy, or irregular vaginal bleeding.',
          'Chronic pelvic pain or pressure.',
          'Urinary symptoms or difficulties due to uterine prolapse.',
          'Symptoms related to fibroids, such as pain or pressure on the bladder and bowel.',
        ],
      },
      



      {
        id: 9,
        name: 'Cancer Screening & Vaccination',
        link: 'cancerscreeningvaccination',
        icon: <FaArrowAltCircleRight />, // Icon provided
        images: [img4], // Array of images
        description: `Cancer Screening & Vaccination initiatives are essential public health measures aimed at early detection and prevention of various cancers. Screening programs help identify cancer at an early stage when it is most treatable, while vaccinations, such as the HPV vaccine, help prevent specific types of cancer, including cervical cancer.`,
        types: [
          {
            title: 'Cervical Cancer Screening',
            details: `Screening methods like the Pap smear and HPV testing help detect precancerous conditions or early-stage cervical cancer, enabling timely treatment and reducing mortality. These screenings are recommended for women at various stages of life, often starting in their early 20s.`,
          },
          {
            title: 'HPV Vaccination',
            details: `The HPV vaccine is a preventive measure against human papillomavirus (HPV) infections, which are linked to several cancers, including cervical, throat, and anal cancers. It is recommended for both males and females and ideally administered in adolescence before exposure to the virus.`,
          },
        ],
        treatment: {
          overview: `Cancer screening and vaccination are preventive steps, not treatments, but they play a vital role in reducing cancer rates and mortality. Screening identifies cancer early, while vaccinations can prevent certain cancers from developing.`,
          details: [
            {
              title: 'Screening Methods',
              description: `Different cancers require specific screening tests, including mammograms for breast cancer, colonoscopies for colorectal cancer, and low-dose CT scans for lung cancer in high-risk individuals.`,
            },
            {
              title: 'Preventive Vaccinations',
              description: `Vaccines like the HPV vaccine target high-risk HPV strains associated with cancer, offering protection against infections that may lead to cancerous changes in the body.`,
            },
          ],
        },
        causes: [
          'Chronic infections such as HPV that can lead to cervical, anal, and throat cancers.',
          'Genetic mutations or hereditary factors that increase cancer risk.',
          'Lifestyle factors, including smoking, diet, and sun exposure, which can contribute to cancer development.',
          'Chronic inflammation and exposure to certain environmental toxins or carcinogens.',
        ],
        symptoms: [
          'Screening aims to detect cancer before symptoms appear. However, certain symptoms, like unusual bleeding, persistent pain, lumps, or changes in bowel habits, may indicate cancer and require medical evaluation.',
          'HPV infection may not present symptoms but can lead to conditions that screening tests can detect early.',
        ],
      },
      



      {
        id: 10,
        name: 'Pre-Marital & Pre-Conception Counseling',
        link: 'premarital',
        icon: <FaArrowAltCircleRight />, // Icon provided
        images: [img8], // Array of images
        description: `Pre-Marital & Pre-Conception Counseling provides prospective couples and individuals with valuable health guidance as they prepare for marriage and future parenthood. This counseling includes essential insights on fertility, lifestyle choices, and preventive health measures to ensure a healthier start to family planning.`,
        types: [
          {
            title: 'Planning for Conception',
            details: `Pre-conception planning focuses on understanding ovulation timing, tracking fertility, and making informed lifestyle adjustments. These sessions support individuals in predicting ovulation, learning about their reproductive health, and preparing for a successful conception journey.`,
          },
          {
            title: 'Health and Lifestyle Optimization',
            details: `Counseling covers essential lifestyle adjustments, including nutrition, exercise, and avoiding substances like tobacco and alcohol. These sessions aim to guide couples on achieving a balanced lifestyle to support fertility and overall health.`,
          },
        ],
        treatment: {
          overview: `Pre-Marital & Pre-Conception Counseling sessions offer tailored guidance on enhancing fertility, making health-conscious choices, and avoiding habits that can impact reproductive health. Working with healthcare providers, couples can gain valuable insights for a healthy start to family life.`,
          details: [
            {
              title: 'Fertility Awareness',
              description: `Learning techniques such as tracking basal body temperature, monitoring cervical mucus, and using ovulation kits to maximize conception potential.`,
            },
            {
              title: 'Health Assessments',
              description: `Pre-conception assessments help identify and address health factors that may affect fertility, including hormone levels, underlying health issues, and lifestyle factors.`,
            },
          ],
        },
        causes: [
          'Smoking and excessive alcohol consumption, both of which can negatively impact fertility and overall reproductive health.',
          'Irregular menstrual cycles or underlying health conditions, which may affect ovulation timing and success rates.',
          'Certain medications that can interfere with ovulation and conception; consulting a healthcare provider about all medications is essential.',
        ],
        symptoms: [
          'Guidance in recognizing ovulation signs, such as:',
          'Changes in cervical mucus texture and appearance.',
          'Basal body temperature shifts, typically observed in the mornings.',
          'Mild pelvic pain, known as "mittelschmerz," around ovulation time.',
        ],
      },

      {
        id: 11,
        name: 'Preventive Oncology',
        link: 'preventiveoncology',
        icon: <FaArrowAltCircleRight />, // Icon provided
        images: [img7], // Array of images
        description: `Preventive Oncology focuses on proactive measures to reduce the risk of developing cancer through lifestyle modifications, vaccinations, and regular screenings. Emphasizing healthy choices and preventive strategies, this approach empowers individuals to take steps toward lowering cancer risks and promoting overall well-being.`,
        types: [
          {
            title: 'Lifestyle Modifications for Cancer Prevention',
            details: `Implementing specific lifestyle choices—like a nutritious diet, regular physical activity, and avoiding tobacco and excessive alcohol—can help reduce cancer risk. Preventive Oncology promotes lifestyle changes aimed at minimizing risk factors linked to different types of cancer.`,
          },
          {
            title: 'Regular Screenings and Health Checks',
            details: `Routine screenings play a crucial role in early detection, significantly improving treatment success rates. Preventive Oncology includes guidance on regular screenings for cancers such as skin, colon, breast, and cervical, as well as self-exams.`,
          },
        ],
        treatment: {
          overview: `Preventive Oncology involves interventions designed to reduce cancer risk through healthy living, vaccination, and regular screenings. Working with healthcare providers, individuals receive personalized advice to manage lifestyle factors and follow recommended screening schedules.`,
          details: [
            {
              title: 'Vaccination for Cancer Prevention',
              description: `Vaccinations, such as those for Hepatitis B and HPV, can prevent infections that may lead to certain cancers, such as liver and cervical cancers. Preventive Oncology encourages vaccinations as part of a comprehensive cancer prevention strategy.`,
            },
            {
              title: 'Sun Protection Measures',
              description: `Using sun protection, like broad-spectrum sunscreen, protective clothing, and avoiding tanning beds, is essential for preventing skin cancer. Preventive Oncology emphasizes strategies for protecting skin health to reduce the risk of UV-related skin cancers.`,
            },
          ],
        },
        causes: [
          'Exposure to carcinogens, such as tobacco smoke, which can increase the risk of various cancers.',
          'A sedentary lifestyle and poor diet, factors associated with obesity and higher risks of cancers, including breast and colon cancers.',
          'Infectious agents like HPV and Hepatitis B, both linked to cancers; vaccination reduces the risk associated with these viruses.',
        ],
        symptoms: [
          'Recommendations to perform self-exams and note changes in health, including:',
          'Lumps or abnormal growths in the skin or breast tissue.',
          'Unusual bleeding or persistent cough that doesn’t resolve over time.',
          'Changes in mole shape or color, a potential early sign of skin cancer.',
        ],
      },
      
      
      




      {
        id: 12,
        name: 'M.T.P / D & C',
        link: 'mtpdnc',
        icon: <FaArrowAltCircleRight />, // Icon provided
        images: [img6], // Array of relevant images
        description: `The M.T.P / D & C services focus on safe and professional options for medical termination of pregnancy (M.T.P) and Dilation & Curettage (D & C) procedures. These services prioritize patient safety, comfort, and thorough care with guidance on reproductive health decisions.`,
        types: [
          {
            title: 'Medical Termination of Pregnancy (M.T.P)',
            details: `Medical Termination of Pregnancy (M.T.P) is a legal and safe option under medical guidance for terminating an early pregnancy. This procedure involves either medication or surgical methods, depending on the individual’s needs, health conditions, and the pregnancy stage. M.T.P services are provided with sensitivity, confidentiality, and in adherence to healthcare regulations.`,
          },
          {
            title: 'Dilation & Curettage (D & C)',
            details: `Dilation & Curettage (D & C) is a procedure performed to clear the uterine lining in cases such as incomplete miscarriage, abnormal bleeding, or other medical conditions. This procedure is conducted by a trained healthcare provider in a controlled environment, ensuring safety, comfort, and proper follow-up care.`,
          },
        ],
        treatment: {
          overview: `Both M.T.P and D & C procedures are carried out with professional care, ensuring patient safety, emotional support, and medical compliance. These procedures are options for individuals needing medical termination of pregnancy or uterine treatment, often under local or general anesthesia and with dedicated aftercare to aid recovery.`,
          details: [
            {
              title: 'Counseling and Pre-procedure Preparation',
              description: `Before M.T.P or D & C procedures, patients receive thorough counseling, addressing health concerns, and receiving information about the steps, potential outcomes, and care instructions. Healthcare providers conduct an assessment to ensure the procedure aligns with the patient’s health and personal circumstances.`,
            },
            {
              title: 'Procedure and Follow-up Care',
              description: `M.T.P may involve prescribed medications or a minor surgical procedure, depending on the case. D & C, on the other hand, involves dilating the cervix and gently clearing the uterine lining. Aftercare includes monitoring and guidance on managing any post-procedure symptoms and a follow-up appointment to ensure full recovery.`,
            },
          ],
        },
        causes: [
          'Unplanned pregnancy where M.T.P is legally chosen under medical supervision.',
          'Incomplete miscarriage requiring D & C to remove any remaining tissue for safe recovery.',
          'Abnormal uterine bleeding or polyps that may necessitate a D & C for diagnosis or treatment.',
        ],
        symptoms: [
          'Indications for M.T.P or D & C may include:',
          'Early pregnancy that the individual chooses to terminate.',
          'Incomplete miscarriage symptoms, such as prolonged bleeding and cramping.',
          'Abnormal or heavy uterine bleeding unresponsive to medication, often warranting D & C.',
        ],
      },
      {
        id: 13,
        name: 'Minimally Invasive Gynecology',
        link: 'minimallyinvasivegynecology',
        icon: <FaArrowAltCircleRight />, // Icon provided
        images: [img7], // Array of relevant images
        description: `Minimally Invasive Gynecology focuses on innovative surgical techniques to treat a range of gynecologic conditions with reduced recovery time, less discomfort, and minimal scarring. The procedures prioritize patient comfort and offer advanced solutions for common gynecological issues.`,
        types: [
          {
            title: 'Hysteroscopic Surgery',
            details: `Hysteroscopic Surgery is a procedure that involves the use of a hysteroscope to diagnose and treat conditions inside the uterus without any incisions. This technique is typically used for removing polyps, fibroids, or abnormal tissue and allows for a quick recovery with minimal discomfort.`,
          },
          {
            title: 'Laparoscopic Surgery',
            details: `Laparoscopic Surgery utilizes small incisions and a camera to guide the surgeon in performing procedures like myomectomy or hysterectomy. This method results in shorter hospital stays and faster recovery times compared to traditional open surgery.`,
          },
          {
            title: 'Robotic Surgery',
            details: `Robotic Surgery enhances laparoscopic techniques by providing surgeons with greater precision and control through robotic-assisted technology. This approach minimizes trauma to surrounding tissues and reduces recovery times significantly.`,
          },
          {
            title: 'Vaginal Surgery',
            details: `Vaginal Surgery is the least invasive approach to perform major gynecologic surgeries, utilizing the vaginal canal to access the uterus. This method reduces the need for abdominal incisions, resulting in quicker recovery and less postoperative discomfort.`,
          },
        ],
        treatment: {
          overview: `Minimally invasive procedures are designed to treat various benign gynecologic conditions effectively while ensuring patient safety and comfort. These approaches are guided by specialized gynecologists trained in advanced surgical techniques, allowing for outpatient procedures and quicker recoveries.`,
          details: [
            {
              title: 'Pre-operative Consultation and Planning',
              description: `Before any minimally invasive procedure, patients undergo a thorough consultation where healthcare providers assess their individual health needs. Detailed discussions about the procedure, recovery, and potential risks are conducted to ensure informed consent.`,
            },
            {
              title: 'Surgical Procedure and Recovery Care',
              description: `Minimally invasive procedures are performed using state-of-the-art technology, often under general or local anesthesia. Postoperative care focuses on pain management, activity guidelines, and follow-up appointments to monitor recovery progress and address any concerns.`,
            },
          ],
        },
        causes: [
          'Benign gynecologic conditions such as uterine fibroids or endometriosis requiring surgical intervention.',
          'Heavy menstrual bleeding or pelvic pain that necessitates surgical diagnosis or treatment.',
          'Adhesions or congenital anomalies affecting reproductive health.',
        ],
        symptoms: [
          'Persistent pelvic pain or discomfort indicating the need for surgical evaluation.',
          'Heavy or irregular menstrual bleeding unresponsive to conservative treatments.',
          'Symptoms of endometriosis, including painful periods and pain during intercourse.',
        ],
      }
      

];



const ServiceDetails = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const location = useLocation();

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    // { label: 'Treatment' },
    { label: 'Treatment Name' },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Set 'once' to false for continuous scroll animations
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lastSegment = location.pathname.split('/').pop();
    const foundService = services.find(service => service?.link === lastSegment);
    if (foundService) {
      setActiveService(foundService);
    }
  }, [location]);

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  console.log(activeService);
  console.log(activeService?.images[0]);
  let pathSegments = window.location.pathname.split('/');

  


 
  

  return (
<section className='overflow-x-hidden'>
  <Helmet>
    <title>Treatment Details - Dr. Somya Singh</title>
    <meta name="description" content="Discover comprehensive treatment details offered by Dr. Manas Aggarwal, a renowned gastroenterology surgeon in Lucknow, focusing on patient-centered care and advanced techniques." />
    <meta name="keywords" content="Treatment Details, Dr. Manas Aggarwal, Gastroenterology, Patient Care, Surgical Techniques, Lucknow" />
  </Helmet>

  <BreadCrumbs headText={activeService?.name} items={breadcrumbItems} image={activeService?.images[0]} text={activeService?.name} />
  
  <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto gap-4 py-6 overflow-hidden">
    {/* Sidebar */}
    <div className="w-full md:w-1/4 shadow-lg p-4 h-fit">
      <h2 className="text-xl font-bold mb-4">Services</h2>
      <ul className="space-y-2">
        {services.map((service) => (
          <li
            key={service.id}
            className={`flex items-center p-3 cursor-pointer rounded-lg transition duration-300 
              ${activeService.id === service.id ? 'bg-[#3597c8] text-white' : 'bg-white text-gray-800 hover:bg-[#46bbf5] hover:text-white ease-in-out duration-500'}`}
              onClick={() => {
                setActiveService(service);
                window.scrollTo(0, 0);
              }}
              
     
          >
            <span className="mr-2 text-xl">{service.icon}</span>
            <span>{service.name}</span>
          </li>
        ))}
      </ul>
      <div className="w-full bg-[#3597c8] text-white rounded-lg shadow-lg p-6 mx-auto mt-8 relative overflow-hidden">
        <h4 className="text-2xl font-bold mb-2">How to Book An Appointment:</h4>
        <p className="text-gray-200 mb-4">
          For more information about our comprehensive treatment options, or to request an appointment with the best Gastroenterologist in Lucknow, call <span className="font-bold">+91-8285070000</span> or click on the button below for online booking.
        </p>
        <Link to="/contact" >
          <button className="bg-white text-[#4A6F8F] px-6 py-3 rounded-lg font-semibold shadow-md ease-in-out duration-300 transition hover:bg-gray-200">
            Book Appointment
          </button>
        </Link>
        {/* Decorative Elements */}
        <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#84b0d7] rounded-full opacity-50 transform rotate-45"></div>
        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-[#84b0d7] rounded-full opacity-50 transform rotate-45"></div>
      </div>
    </div>

    {/* Main Content Area */}
    <div className="md:w-3/4 w-full ml-auto pl-4">
      {/* Service Image */}
      <img src={activeService?.images} alt="" className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]" />

      {/* Service Details */}
      <motion.div
        className="bg-white rounded-lg md:p-6 shadow-md pt-4"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">{activeService.name}</h2>

        {/* Overview Section */}
        <p className="mb-6 text-lg text-gray-700 text-justify md:w-full w-[90%]">
          {activeService.description}
        </p>

        {/* Types of Stomach Diseases */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {activeService.types.map((type, index) => (
            <div
              key={index}
              className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h4 className="text-lg font-bold mb-2">{type.title}</h4>
              <p className="text-gray-600">{type.details}</p>
            </div>
          ))}
        </div>

        {/* Treatment Overview */}
        <h3 className="mb-4 mt-6 text-xl font-bold">Treatment Overview:</h3>
        <p className="text-gray-700">{activeService.treatment.overview}</p>
        {activeService.treatment.details.map((item, index) => (
          <div
            key={index}
            className="mt-4 border-l-4 border-[#4A6F8F] pl-4 bg-blue-50 p-3 rounded-md shadow-sm transition transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={300 + index * 100}
          >
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}

        {/* Causes */}
        <h3 className="text-xl font-semibold mb-4 mt-6">Causes:</h3>
        <ul className="list-disc pl-5 mb-4">
          {activeService.causes.map((cause, index) => (
            <li key={index} className="flex items-center mb-2" data-aos="fade-up" data-aos-delay={400 + index * 100}>
              <FaExclamationTriangle className="text-red-500 mr-2" />
              <span className="text-gray-600">{cause}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
</section>

  
  );
};


export default ServiceDetails;
