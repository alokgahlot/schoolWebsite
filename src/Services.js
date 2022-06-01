import React, { useState } from "react";
import serviceapi from "./API/serviceApi.js";
import HowItWorks from "./HowItWorks.js";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="aboutUsMainContainer" >  <h3>Rules of Conduct for Students:</h3>
        <ul>
          <li>Every student should bring the school diary daily. If a pupil loses the diary, he/she will be subjected to disciplinary action. A fine of Rs. 100.00 will be levied and a new diary will have to be purchased with necessary remarks about the loss of the previous one.</li>
          <li>All students must be clean and neatly dressed in school uniform according to season. Trousers and blazers must be of the regulation pattern and colour. Leggy trousers are strictly prohibited. Uniforms of other shades are not allowed in school.</li>
          <li>All school property must be taken care of and no student should scratch or spoil the desks or chairs or damage any other school furniture, write or draw anything on the walls or in any way damage things belonging to others. Damage done, even by accident, should be reported at once to the vice Principal’s/Headmaster’s office. Any damage done will be made good by the one who does it. If the culprit cannot be indentified/refuses to confess, the whole class will be liable to pay the penalty fixed by the Principal. Anyone who sees something damaged should report the matter even if he/she does not know who has done it. Each class will be responsible for looking after the class property.</li>
          <li>Students are discouraged to bring money beyond their daily requirements to school. School is not responsible for the money lost/stolen.</li>
          <li>Students are forbidden to bring mobiles phones or any other electronic gadgets to school. If caught, the confiscated items will be returned to the parent only at the end of academic year.</li>
          <li>The school is not responsible for any goods/valuables lost. Therefore it is advisable not to bring any valuables (like expensive watches or ornaments) to school.</li>
          <li>Bunking school/class will invite serious disciplinary action.</li>
          <li>Use of abusive language is strictly forbidden in school.</li>
        </ul></div>
      
        <div className="aboutUsMainContainer" style={{marginTop:20}}  >  <h3>IMPORTANT INSTRUCTIONS FOR PARENTS:</h3>
        <ul>
          <li>All parents/guardians must ensure that their wards complete their projects/home assignments on time. On a daily basis the parent must check the school bag/books/registers of their ward to ensure that all works are completed on time</li>
          <li>Train your ward to become self-dependent and take up the responsibility of his/her life gradually. He/she should be taught how to dress up on his/her own, polish the shoes, tie the knot of the school tie. He/she should get the school bag, uniform, shoes etc. ready on the previous night so that the morning rush can be avoided.</li>
          <li>Wearing the proper school uniform as per the season is a must. If any student is not wearing the appropriate school uniform/school shoes or if he/she is slovenly dressed, the parent will be called to school and will be asked to take the ward from school on that day.</li>
          <li>‘Cleanliness is next to Godliness’. All parents must educate their wards how to keep their environment clean. The parents not only set an example in this by maintaining their surroundings clean but also engage their wards in cleaning their rooms, shelves, wardrobes etc clean and tidy.</li>
          <li>Parents are discouraged to take their wards from school on working days for family functions or other social gatherings. For marriage within the family only one day’s leave is granted, as a rule. For this prior sanction is needed. Withdrawal of a child from classes for mere social functions is not recommended because it retards the child’s progress in school and minimizes his/her respect for regular hard work, with consequent failure of progress in his/her studies</li>
          <li>When your ward is ill, avoid sending him/her school. If may aggravate his/her health condition.</li>
          <li>If a student is repeatedly caught for bulling, fighting or using abusive language in the school bus he/she shall summarily taken out from the school bus, he/she shall be prohibited from using the school bus and disciplinary action will be taken against them.</li>
          <li>Parents/Guardians/Visitors are not allowed to enter the classrooms and meet their wards during the school hours. In event of an emergency, contact your ward through the school office. </li>
        </ul></div>

      </section>
    </>
  );
};

export default Services;
