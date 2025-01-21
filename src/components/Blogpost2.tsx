import React from "react";

export default function Blogpost2() {
  return (
    <div>
      <>
        {/* <title>Free Css Layout</title> */}
        <meta
          httpEquiv="content-type"
          content="text/html; charset=iso-8859-1"
        />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <div id="container">
          <div id="header">
            <h1>
              <a href="http://www.free-css.com/free-css-layouts.php">
                Free CSS Layouts
              </a>
            </h1>
          </div>
          <div id="wrapper">
            <div>
              <p className="lead">การวินิจฉัยระบบองค์การภาครัฐ</p>
              <p>
                <strong>ทฤษฎีระบบ (System Theory) </strong>
              </p>
              <p>
                ทฤษฎีระบบ (System Theory)
                เป็นแนวคิดที่มององค์การเป็นระบบเปิดที่ซับซ้อน
                มีองค์ประกอบพื้นฐาน ดังนี้{" "}
                <ol style={{ listStyleType: "decimal" }} className="ml-3">
                  {" "}
                  <li>
                    {" "}
                    องค์การเป็นหน่วย (Entity) ที่ไม่แตกต่างจากระบบอื่น
                    ซึ่งมีInput คือวัตถุดิบ
                    ความสามารถของพนักงานและเงินทุนTransformation Process
                    กระบวนการขององค์การ Output คือสินค้า ข้อมูล บริการ
                    Stakeholders ที่เกิดจากกระบวนการขององค์การ
                  </li>
                  <li>
                    สภาพแวดล้อมและขอบเขตขององค์การ(Environment and Boundaries)
                    องค์การมีลักษณะเปิดหรือปิด ดำรงอยู่ในสิ่งแวดล้อม (ลูกค้า
                    พันธมิตร คู่แข่ง แนวโน้มต่างๆ)
                    ที่เป็นประโยชน์หรือโทษต่อองค์การเปลี่ยนแปลงช้าหรือเร็ว
                    ระบบต่างๆ ล้วนอยู่ภายใต้อิทธิพลของสิ่งแวดล้อม
                    และตรงกันข้ามก็ส่งผลกระทบต่อสิ่งแวดล้อมรอบข้าง
                  </li>
                  <li>
                    ทุกส่วนเกี่ยวข้องกัน (All Parts
                    Related)ทุกส่วนของระบบมีความเกี่ยวข้องกัน
                    ถ้าส่วนใดส่วนหนึ่งเปลี่ยนแปลง ส่วนอื่นจะเปลี่ยนแปลงตาม
                    คือได้รับผลกระทบ
                  </li>
                  <li>
                    ข้อมูลป้อนกลับ (Feed-backs)องค์การได้รับข้อมูลป้อนกลับของ
                    Outputs จากสิ่งแวดล้อมข้อมูลปรากฏอยู่ในหลายรูปแบบ เช่น
                    ผลการให้บริการจากหน่วยงานภาครัฐ
                    ผลประกอบการปฏิสัมพันธ์ที่เกิดกับองค์การอื่น
                  </li>
                  <li>
                    ภายในระบบมีปฏิสัมพันธ์กัน (Systems Within Systems)
                    ประกอบด้วย
                    <ul style={{ listStyleType: "square" }} className="ml-3">
                      <li>ระดับบุคคล</li> <li> ระดับกลุ่ม</li>{" "}
                      <li> ระหว่างกลุ่ม</li> <li> ระดับองค์การ</li>
                    </ul>
                  </li>
                </ol>
              </p>
              {/* <p className="lead">ทฤษฎีระบบ สามารถสรุปได้ดังนี้</p> */}
              <p>
                <strong>ทฤษฎีระบบ สามารถสรุปได้ดังนี้</strong>
              </p>
              <p>
                ทฤษฎีระบบ สามารถสรุปได้ดังนี้
                <ol style={{ listStyleType: "decimal" }} className="ml-3">
                  {" "}
                  <li>
                    องค์การเป็นระบบที่มีขอบเขต Inputsวัตถุดิบ Suppliers
                    เงินทุน/แหล่งทุน ความสามารถของพนักงาน ผู้ถือหุ้น
                    นโยบายของรัฐบาล และกฎระเบียบต่างๆ Throughputs/Transformation
                    Process คือกระบวนการทำงาน กระบวนการแปลง Inputs เป็น Outputs
                    Outputs คือสิ้นค้า บริการ ข้อมูล ฯลฯ
                  </li>
                  <li>
                    องค์การและระบบย่อยทั้งหมดขององค์การทำหน้าที่ในลักษณะที่สอดประสานกันเพื่อให้บรรลุเป้าหมายขององค์การ
                    ทุกส่วนของระบบล้วนมีความเกี่ยวข้องกันเมื่อส่วนใดส่วนหนึ่งถูกเปลี่ยนแปลง
                    ส่วนอื่นๆ ก็จะได้รับผลกระทบ
                  </li>
                  <li>
                    กระบวนการภายในองค์การ จำเป็นต่อประสิทธิภาพและประสิทธิผล
                    รวมทั้งความสำเร็จขององค์การกระบวนการผลิต ซึ่งรวบรวมและแปลง
                    Inputs เป็น Outputs กระบวนการสังคม
                    เกี่ยวข้องกับบุคคลและกลุ่มต่างๆ
                    จนทำให้เกิดบรรทัดฐานและกระบวนการตอบสนองความต้องการของแต่ละบุคคล
                    ซึ่งมีอิทธิพลต่อความรู้สึกและความมุ่งมั่นของมนุษย์
                  </li>
                  <li>
                    องค์การและระบบย่อยทั้งหมดขององค์การเป็นหน่วยหนึ่งอยู่ภายใต้อิทธิพลของสิ่งแวดล้อม
                    ที่สามารถส่งผลกระทบทั้งด้านบวกและลบต่อหน่วยนั้นๆ
                  </li>
                  <li>
                    องค์การได้รับข้อมูลป้อนกลับ (Feedback) เกี่ยวกับ Outputs
                    ของตนจากสิ่งแวดล้อม
                    ซึ่งช่วยให้องค์การสามารถดำเนินการเปลี่ยนแปลงต่างๆ
                    เพื่อให้การตอบสนองต่อสิ่งแวดล้อมดีขึ้น
                    โดยข้อมูลป้อนกลับจากลูกค้าเป็นสิ่งที่จำเป็นต่อความสำเร็จในระยะยาวขององค์การมากที่สุด
                  </li>
                </ol>
              </p>
              <p></p>
              {/* <p className="lead">ทฤษฎีระบบ สามารถสรุปได้ดังนี้</p> */}
              <p>
                <strong>การวินิจฉัยระบบด้วย Weisbord’s Six-Box Model</strong>
              </p>
              <p>
                <ol style={{ listStyleType: "decimal" }} className="ml-3">
                  {" "}
                  <li>
                    ความมุ่งหมาย (Purpose) หรือพันธกิจ (Mission)มีความชัดเจน
                    ได้รับการยอมรับจากพนักงานหรือไม่
                  </li>
                  <li>
                    โครงสร้าง (Structure)กิจกรรม/งานต่างๆ ถูกแบ่งในลักษณะใด
                    ช่วยตอบสนองต่อความมุ่งหมาย/พันธกิจอย่างมีประสิทธิภาพหรือไม่
                  </li>
                  <li>
                    {" "}
                    ความสัมพันธ์
                    (Relationships)การประสานงานระหว่างหน่วยงานเป็นไปด้วยดีหรือไม่
                    หรือก่อให้เกิดความขัดแย้งอย่างไรและจัดการกับความขัดแย้งนั้นอย่างไร
                  </li>
                  <li>
                    รางวัล (Rewards)มีการให้รางวัลสำหรับผลงานที่ต้องการหรือไม่
                    หรือมีมาตรการลงโทษอย่างไร
                  </li>
                  <li>
                    การนำ (Leadership)นำการขับเคลื่อนองค์การ
                    มีหน้าที่กำกับติดตามความเป็นไป
                    หรือความสำเร็จขององค์ประกอบทั้ง 5 ด้าน{" "}
                  </li>
                  <li>
                    กลไกที่จำเป็น (Helpful Mechanism)องค์การมีเครื่องมือ
                    หรือเทคโนโลยีสำหรับการประสานงานระหว่างหน่วยงานต่างๆ
                    อย่างเพียงพอหรือไม่
                  </li>
                  <li>
                    ข้อดี ข้อเสียของ Modelข้อดี คือเป็น Model ที่เข้าใจง่าย
                    ข้อเสียเป็นการวินิจฉัยระบบที่ขาดความรอบด้านเนื่องจากไม่ได้แสดงความเกี่ยวพันของแต่ละองค์ประกอบอย่างชัดเจนรวมทั้งไม่ได้คำนึงถึงอิทธิพลของสิ่งแวดล้อม
                  </li>
                </ol>
              </p>
              <p>
                Montegeraliquam sed pede in cursus praesenec vestas rhoncus wisi
                at wisi. Condisseloborttis enim et ipsum mauristie id felit
                adipiscipit ac auctortorttitor sempor. Vitantesqueat sempus non
                sed et mus sit vivamus purus netus hendiment. Pretiuma diam et
                id tempus dolor por wisi sed volutpat facilisi.
              </p>
              <p>
                Wisiet sus adipit phasellentum elit condissim consecteturpiscing
                sapien vivamus et congue. Utvel tris quismod cursus liberos elit
                nisse curabitur tur parturpis tellenterdum. Semperligula
                curabitae tellentesque nulla trices vestas ristibulum id justo
                auctor facinia. Natisdonec consequat nibh pellus.
              </p>
              <p>
                Vestibusodio euisque id elerisus lacus tincidunt sit malesuada
                lacus pellus parturpiscing. Pellenterdumat maecenatoque cras a
                magna nibh et quis diam ames et. Laoremvolutpat ac dolor eget
                eget temper lacus vestibus velit lacus venean. Magnaipsum tellus
                morbi leo aliquat nulla convallis pellentesque.
              </p>
            </div>
          </div>
          {/* <div id="navigation">
            <p>
              <strong>Navigation Here</strong>
            </p>
            <ul>
              <li>
                <a href="http://www.free-css.com/">Free CSS Templates</a>
              </li>
              <li>
                <a href="http://www.free-css.com/free-css-layouts.php">
                  Free CSS Layouts
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div id="extra">
            <p>
              <strong>More stuff here.</strong>
            </p>
            <p>
              sit malesuada lacus pellus parturpiscing. Pellenterdumat
              maecenatoque cras a magna nibh et quis diam ames et.
              Laoremvolutpat ac dolor eget eget temper lacus vestibus velit
              lacus venean. Magnaipsum tellus morbi leo aliquat nulla convallis
              pellentesque.
            </p>
          </div> */}
          <div id="footer">{/* <p>Footer</p> */}</div>
        </div>
      </>
    </div>
  );
}
