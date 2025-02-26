import Link from "next/link";
import React from "react";

export default function Portfolio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">หน้าหลัก</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                  กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-1-66.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลองค์การภาครัฐให้เกิดประสิทธิผล</h3>
                <p>
                  การสร้างความพร้อมในการเปลี่ยนแปลงของสมาชิกในองค์การ (Creating
                  Readiness for Change)
                </p>
                <p>
                  ต้องทำให้สมาชิกขององค์การเห็นความจำเป็นของการเปลี่ยนแปลง
                  ช่วยให้บุคลากรเหล่านี้ลดการต่อต้านการเปลี่ยนแปลง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-67-71.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล
                </h3>
                <p>
                  ความเป็นองค์กรดิจิทัล: ERP System (Enterprise Resource
                  Planning) ระบบบริหารจัดการทรัพยากรภายในองค์กร
                </p>
                <p>
                  ความเป็นองค์กรเสมือนจริง: Metaverse
                  จักรวาลนฤมิตก้าวสู่ความเป็นรัฐบาลดิจิทัล
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-72-75.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง </h3>
                <p>
                  แหล่งข้อมูลด้านล่างนี้จะสำรวจว่าเหตุใดความยืดหยุ่นจึงมีความสำคัญในการดำเนินธุรกิจในปัจจุบัน
                  ตั้งแต่การรับรองความต่อเนื่องไปจนถึงการให้ความมั่นคงในสภาพแวดล้อมแบบไดนามิกในปัจจุบัน
                  สำรวจแง่มุมที่สำคัญของความยืดหยุ่นทางธุรกิจ
                </p>
                <p>
                  องค์กรที่มีความยืดหยุ่นสามารถทนต่อวิกฤติได้ดีขึ้น
                  ฟื้นตัวจากวิกฤติได้เร็วกว่า และมักจะทำงานได้ดีกว่าคู่แข่ง
                  แต่การสร้างธุรกิจที่มีความยืดหยุ่นอย่างแท้จริงนั้นไม่ใช่เรื่องง่าย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-76-78.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง </h3>
                <p>
                  “การเปิดให้เยาวชนมีส่วนร่วมกับโครงการของรัฐสัมพันธ์กับการให้ความหมายและความสำคัญของผู้มีอำนาจต่อผู้ที่มีอำนาจน้อยกว่า”
                </p>
                <p>
                  “หากรัฐบาลหรือนายกรัฐมนตรีมาจากฝ่ายทหาร
                  เยาวชนจะถูกมองว่าเป็นพลทหาร
                  วิธีการกำหนดนโยบายและงบประมาณเพื่อเปิดให้เยาวชนเข้ามามีส่วนร่วมก็จะเป็นไปตามความคุ้นเคยที่ทหารมองเยาวชน
                  เวลาจะขับเคลื่อนก็ต้องสู้หนักหน่อย
                  แต่หากรัฐบาลมาจากฝ่ายธุรกิจอย่างในขณะนี้
                  เยาวชนก็จะถูกมองว่าเป็นผู้ประกอบการรุ่นเยาว์หรือลูกค้า
                  วิธีคิดในการกำหนดนโยบายและจัดสรรงบประมาณก็เปลี่ยน”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-79-82.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Six */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง </h3>
                <p>
                  การสำรวจการจัดการการเปลี่ยนแปลงช่วยปรับกระบวนการเปลี่ยนแปลงของบริษัทของคุณให้มีประสิทธิภาพมากขึ้น
                  ใช้คำถามในบทความนี้เพื่อสำรวจพนักงานของคุณในระหว่างโครงการเปลี่ยนแปลง
                </p>
                <p>
                  แบบสำรวจการจัดการการเปลี่ยนแปลงแบบสนทนาได้รับอัตราการตอบสนองสูงสุด
                  สร้างแบบสำรวจได้อย่างง่ายดายด้วยเทมเพลตสำเร็จรูป
                  นี่คือแบบสำรวจข้อเสนอแนะเกี่ยวกับการจัดการการเปลี่ยนแปลงที่จะช่วยคุณในกระบวนการรวบรวมข้อเสนอแนะและดำเนินการตามนั้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-83-85.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Seven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href="https://www.humanica.com/th/resistance-to-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
                  </Link>{" "}
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง คือ
                  การที่องค์กรจำเป็นต้องปรับเปลี่ยนโครงสร้างภายใน
                  เพื่อรองรับการเติบโต หรือเพื่อความอยู่รอดขององค์กร
                  แต่มีพนักงานบางส่วนไม่ยอมรับและปฏิเสธการเปลี่ยนแปลงดังกล่าว
                  ทำให้เกิดการต่อต้านการเปลี่ยนแปลงนั่นเอง ยกตัวอย่างเช่น
                  การเปลี่ยนผู้บริหาร, การเปลี่ยนระบบการทำงาน,
                  การปรับเปลี่ยนกลยุทธ์ทางการตลาด
                  หรือการเปลี่ยนวัฒนธรรมองค์กรใหม่ เป็นต้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-86-89.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eight */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การเอาชนะการต่อต้านการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href="https://primeast.com/us/insights/7-strategies-for-overcoming-resistance-to-change-in-the-workplace/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ในโลกทุกวันนี้การเปลี่ยนแปลงคือสิ่งเดียวที่ไม่เปลี่ยนแปลงซึ่งรายล้อมเราอยู่
                    ในธุรกิจก็เช่นเดียวกัน
                  </Link>{" "}
                </p>
                <p>
                  การทำความเข้าใจถึงการต่อต้านของพนักงานถือเป็นสิ่งสำคัญสำหรับองค์กรใดๆ
                  ที่ต้องการนำแนวคิดริเริ่มการเปลี่ยนแปลงมาใช้
                  โดยการสังเกตสัญญาณของการต่อต้านตั้งแต่เนิ่นๆ เช่น
                  ขวัญกำลังใจที่ตกต่ำหรือการขาดงานที่เพิ่มขึ้น
                  ผู้จัดการสามารถดำเนินการเชิงรุกเพื่อแก้ไขข้อกังวลและสร้างสภาพแวดล้อมที่เอื้อต่อการเปลี่ยนแปลงมากขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="/images/change/4 การดำเนินการเปลี่ยนแปลง-90-92.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.gotoknow.org/posts/495807#google_vignette"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง คืออะไร
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    <li>ระดับการมีส่วนร่วม</li>
                    <li>ความมุ่งมั่น</li>
                    <li>
                      ความเป็นเจ้าของของบุคลากรเกี่ยวข้องโดยตรงกับระดับการมีส่วนร่วม
                    </li>
                    <li>เพื่อให้เกิดการเปลี่ยนแปลงองค์กรที่ยั่งยืน</li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-93-98.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์</h3>
                <p>
                  Vision Statement หรือคำกล่าวถึงวิสัยทัศน์ของแบรนด์หรือองค์กร
                </p>
                <p>
                  {" "}
                  Vision Statement
                  นั้นเป็นการอธิบายถึงผลลัพธ์ในระยะยาวที่แบรนด์นั้นวางเป้าหมายเอาไว้
                  นับเป็นระดับที่เรียกว่าสูงสุดขององค์กร
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-99-102.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง </h3>
                <p>
                  แหล่งข้อมูลด้านล่างนี้จะสำรวจว่าเหตุใดความยืดหยุ่นจึงมีความสำคัญในการดำเนินธุรกิจในปัจจุบัน
                  ตั้งแต่การรับรองความต่อเนื่องไปจนถึงการให้ความมั่นคงในสภาพแวดล้อมแบบไดนามิกในปัจจุบัน
                  สำรวจแง่มุมที่สำคัญของความยืดหยุ่นทางธุรกิจ
                </p>
                <p>
                  องค์กรที่มีความยืดหยุ่นสามารถทนต่อวิกฤติได้ดีขึ้น
                  ฟื้นตัวจากวิกฤติได้เร็วกว่า และมักจะทำงานได้ดีกว่าคู่แข่ง
                  แต่การสร้างธุรกิจที่มีความยืดหยุ่นอย่างแท้จริงนั้นไม่ใช่เรื่องง่าย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-76-78.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์</h3>
                <p>
                  <Link
                    href="https://www.popticles.com/branding/how-to-write-effective-vision-statement/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vision Statement หรือคำกล่าวถึงวิสัยทัศน์ของแบรนด์หรือองค์กร
                  </Link>
                </p>
                <p>
                  {" "}
                  Vision Statement
                  นั้นเป็นการอธิบายถึงผลลัพธ์ในระยะยาวที่แบรนด์นั้นวางเป้าหมายเอาไว้
                  นับเป็นระดับที่เรียกว่าสูงสุดขององค์กร
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-99-102.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์ </h3>
                <p>
                  <Link
                    href="https://www.adpt.news/2017/09/13/7-factors-affecting-major-changes-org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                    2000 คน
                  </Link>
                </p>
                <p>
                  องค์กรที่มีความยืดหยุ่นสามารถทนต่อวิกฤติได้ดีขึ้น
                  ฟื้นตัวจากวิกฤติได้เร็วกว่า และมักจะทำงานได้ดีกว่าคู่แข่ง
                  แต่การสร้างธุรกิจที่มีความยืดหยุ่นอย่างแท้จริงนั้นไม่ใช่เรื่องง่าย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-76-78.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://thailandpolicylab.com/stakeholder-analysis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ทำไมเราถึงต้องวิเคราะห์ผู้มีส่วนได้ส่วนเสีย?
                  </Link>
                </p>
                <p>
                  {" "}
                  Vision Statement
                  นั้นเป็นการอธิบายถึงผลลัพธ์ในระยะยาวที่แบรนด์นั้นวางเป้าหมายเอาไว้
                  นับเป็นระดับที่เรียกว่าสูงสุดขององค์กร
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-103-106.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eleven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การค้นหาผู้มีส่วนได้ส่วนเสีย </h3>
                <p>
                  <Link
                    href="https://asana.com/resources/project-stakeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การแจกแจงผู้มีส่วนได้ส่วนเสียทั้งที่เป็นกลุ่มบุคคลที่เกี่ยวข้องกับองค์การโดยตรง
                  </Link>
                </p>
                <p>การประเมินศักยภาพของผู้มีส่วนได้ส่วนเสีย</p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-103-106.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Twelve */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การโน้มน้าวผู้มีส่วนได้ส่วนเสีย </h3>
                <p>
                  <Link
                    href="https://pm-alliance.com/5-strategies-to-persuade-on-the-fence-stakeholders/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การทำให้ผู้มีส่วนได้ส่วนเสียรู้สึกถึงความจำเป็นในการเปลี่ยนแปลง
                  </Link>
                </p>
                <p>การใช้เครือข่ายทางสังคม ประชาสัมพันธ์ชี้แจง</p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-107-110.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Thirteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href="https://whatfix.com/blog/change-advisory-board/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ประธานเจ้าหน้าที่บริหาร
                    หรือผู้บังคับบัญชาที่รับผิดชอบกิจกรรมการเปลี่ยนแปลง
                  </Link>
                </p>
                <p>
                  ผู้จัดการโครงการที่ได้รับมอบหมายกรณีพิเศษให้ประสานงานการเปลี่ยนแปลง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-111-114.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href="https://www.phyathai.com/th/article/3214-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%AD?srsltid=AfmBOorcQCnEaZ_7_RS_lZiUwgYfYu8cvn2Wr8aJmCqxWq4LN41IehRP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การดูแลแบบประคับประคอง (Palliative Care)
                    เป็นที่รู้จักกว้างขวางในต่างประเทศ โดยเฉพาะในประเทศตะวันตก
                    และกำลังเริ่มเป็นที่รู้จักมากขึ้นในประเทศไทย
                    แต่การดูแลผู้ป่วยกลุ่มนี้โดยเฉพาะในช่วงใกล้เสียชีวิต
                    ยังจำเป็นต้องสร้างความรู้ความเข้าใจให้มากขึ้น
                    เพื่อให้ผู้ป่วยและครอบครัวไม่ตื่นตระหนก เข้าใจ
                    และรับมือกับอาการที่เกิดขึ้นได้
                  </Link>
                </p>
                <p>
                  การดูแลแบบประคับประคอง หรือ Palliative Care คือ
                  การดูแลที่มีมุ่งเน้นการเพิ่มคุณภาพชีวิตของผู้ป่วยและครอบครัว
                  โดยลดความทุกข์ทรมานทั้งด้านร่างกาย จิตใจ สังคม และจิตวิญญาณ
                  เป็นการดูแลควบคู่กับการรักษาหลักที่มุ่งหวังกำจัดตัวโรค
                  การดูแลแบบประคับประคองจะคำนึงถึงความต้องการและความปรารถนาของผู้ป่วยและครอบครัวร่วมด้วยเสมอ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-115-119.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
