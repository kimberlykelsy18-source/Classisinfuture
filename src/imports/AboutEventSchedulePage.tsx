import svgPaths from "./svg-rvi3wvctci";
import imgImage from "figma:asset/9f561e5fda5a125aef54034d92469cfdcc7bec7e.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[0px] text-white w-[296px]">
      <p className="font-['Anta:Regular',sans-serif] leading-[normal] relative shrink-0 text-[32px] w-full">
        <span>{`Class is in `}</span>
        <span className="text-[#56aa3e]">Future</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">
        <span className="leading-[30px] not-italic text-[20px]">by</span>
        <span className="leading-[32px] text-[24px]"> </span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic text-[20px] text-white">Tutlee</span>
      </p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre">About</p>
      <ChevronDown />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#6923d2] h-[56px] relative rounded-[8px] shrink-0 w-[160px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[160px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Get Tickets</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6923d2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonBase />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[57px] items-center relative shrink-0">
      <Frame1 />
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre">Speakers</p>
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre">{`Startups & Investors`}</p>
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre">Partners</p>
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre">Hackathon</p>
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[1616px]">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-black h-[120px] left-0 overflow-clip top-0 w-[1728px]">
      <Frame3 />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[62px] items-start not-italic relative shrink-0 w-[773px]" data-name="Text and supporting text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#e9eaeb] text-[20px] w-full">Join our newsletter</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#d5d7da] text-[16px] w-full">Don’t miss anything! We’ll send you cool letters containing information about the conference.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#717680] text-[16px]">Enter your email</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function InputFieldBase() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="_Input field base">
      <InputWithLabel />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-[280px]" data-name="Input field">
      <InputFieldBase />
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="bg-[#7f56d9] relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[18px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f56d9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonBase1 />
    </div>
  );
}

function EmailCapture() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Email capture">
      <InputField />
      <Button1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[232px] items-start relative shrink-0 w-full">
      <TextAndSupportingText />
      <EmailCapture />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
      <Frame11 />
      <div className="bg-[#e9eaeb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Overview</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase2 />
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button2 />
    </div>
  );
}

function ButtonBase3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Event Schedule</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase3 />
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button3 />
    </div>
  );
}

function ButtonBase4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Get a Booth</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase4 />
    </div>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button4 />
    </div>
  );
}

function ButtonBase5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Online Experience</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase5 />
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button5 />
    </div>
  );
}

function ButtonBase6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">{`Hotels & Flights`}</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase6 />
    </div>
  );
}

function FooterLink4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button6 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink />
      <FooterLink1 />
      <FooterLink2 />
      <FooterLink3 />
      <FooterLink4 />
    </div>
  );
}

function FooterLinksColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[204px] items-start relative shrink-0 w-[149px]" data-name="_Footer links column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">About</p>
      <FooterLinks />
    </div>
  );
}

function ButtonBase7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Startups</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase7 />
    </div>
  );
}

function FooterLink5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button7 />
    </div>
  );
}

function ButtonBase8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Investors</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase8 />
    </div>
  );
}

function FooterLink6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button8 />
    </div>
  );
}

function ButtonBase9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Hackathon</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase9 />
    </div>
  );
}

function FooterLink7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button9 />
    </div>
  );
}

function ButtonBase10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Volunteers</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase10 />
    </div>
  );
}

function FooterLink8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button10 />
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink5 />
      <FooterLink6 />
      <FooterLink7 />
      <FooterLink8 />
    </div>
  );
}

function FooterLinksColumn1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[168px] items-start relative shrink-0 w-[149px]" data-name="_Footer links column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">For You</p>
      <FooterLinks1 />
    </div>
  );
}

function ButtonBase11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Partners</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase11 />
    </div>
  );
}

function FooterLink9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button11 />
    </div>
  );
}

function ButtonBase12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">{`Media `}</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase12 />
    </div>
  );
}

function FooterLink10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button12 />
    </div>
  );
}

function ButtonBase13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Events</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase13 />
    </div>
  );
}

function FooterLink11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button13 />
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink9 />
      <FooterLink10 />
      <FooterLink11 />
    </div>
  );
}

function FooterLinksColumn2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[132px] items-start relative shrink-0 w-[150px]" data-name="_Footer links column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">{`Partners & Media`}</p>
      <FooterLinks2 />
    </div>
  );
}

function ButtonBase14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">FAQs</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase14 />
    </div>
  );
}

function FooterLink12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button14 />
    </div>
  );
}

function ButtonBase15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase15 />
    </div>
  );
}

function FooterLink13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button15 />
    </div>
  );
}

function ButtonBase16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase16 />
    </div>
  );
}

function FooterLink14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button16 />
    </div>
  );
}

function ButtonBase17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Accessibility Policy</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase17 />
    </div>
  );
}

function FooterLink15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button17 />
    </div>
  );
}

function ButtonBase18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">{`Terms & Conditions`}</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase18 />
    </div>
  );
}

function FooterLink16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button18 />
    </div>
  );
}

function FooterLinks3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink12 />
      <FooterLink13 />
      <FooterLink14 />
      <FooterLink15 />
      <FooterLink16 />
    </div>
  );
}

function FooterLinksColumn3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[204px] items-start relative shrink-0 w-[149px]" data-name="_Footer links column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">Support</p>
      <FooterLinks3 />
    </div>
  );
}

function ButtonBase19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">X</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase19 />
    </div>
  );
}

function FooterLink17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button19 />
    </div>
  );
}

function ButtonBase20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">LinkedIn</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase20 />
    </div>
  );
}

function FooterLink18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button20 />
    </div>
  );
}

function ButtonBase21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Facebook</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase21 />
    </div>
  );
}

function FooterLink19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button21 />
    </div>
  );
}

function ButtonBase22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">TikTok</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase22 />
    </div>
  );
}

function FooterLink20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button22 />
    </div>
  );
}

function ButtonBase23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Instagram</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase23 />
    </div>
  );
}

function FooterLink21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button23 />
    </div>
  );
}

function ButtonBase24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">YouTube</p>
    </div>
  );
}

function Button24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase24 />
    </div>
  );
}

function FooterLink22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button24 />
    </div>
  );
}

function FooterLinks4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink17 />
      <FooterLink18 />
      <FooterLink19 />
      <FooterLink20 />
      <FooterLink21 />
      <FooterLink22 />
    </div>
  );
}

function FooterLinksColumn4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[240px] items-start relative shrink-0 w-[149.167px]" data-name="_Footer links column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">Social</p>
      <FooterLinks4 />
    </div>
  );
}

function ButtonBase25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase25 />
    </div>
  );
}

function FooterLink23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button25 />
    </div>
  );
}

function ButtonBase26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Accessibility Policy</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase26 />
    </div>
  );
}

function FooterLink24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button26 />
    </div>
  );
}

function ButtonBase27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">{`Terms & Conditions`}</p>
    </div>
  );
}

function Button27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase27 />
    </div>
  );
}

function FooterLink25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <Button27 />
    </div>
  );
}

function FooterLinks5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink23 />
      <FooterLink24 />
      <FooterLink25 />
    </div>
  );
}

function FooterLinksColumn5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[149px]" data-name="_Footer links column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">Legal</p>
      <FooterLinks5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[102px] items-start relative shrink-0 w-full">
      <FooterLinksColumn />
      <FooterLinksColumn1 />
      <FooterLinksColumn2 />
      <FooterLinksColumn3 />
      <FooterLinksColumn4 />
      <FooterLinksColumn5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[0px] text-white w-[296px]">
      <p className="font-['Anta:Regular',sans-serif] leading-[normal] relative shrink-0 text-[32px] w-full">
        <span>{`Class is in `}</span>
        <span className="text-[#56aa3e]">Future</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">
        <span className="leading-[30px] not-italic text-[20px]">by</span>
        <span className="leading-[32px] text-[24px]"> </span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic text-[20px] text-white">Tutlee</span>
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 w-full">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#d5d7da] text-[16px] text-nowrap whitespace-pre">© 2026 Class is in Future. All rights reserved.</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div className="bg-[#e9eaeb] h-px shrink-0 w-full" data-name="Divider" />
      <Frame13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[160px] top-[64px] w-[1408px]">
      <Frame12 />
      <Frame15 />
      <Frame14 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black h-[711px] left-1/2 top-[3208px] translate-x-[-50%] w-[1728px]" data-name="Footer">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[120px] text-center top-[calc(50%-21px)] translate-y-[-50%] w-[1488px]">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] relative shrink-0 text-[56px] text-white tracking-[-1.12px] w-full">Welcome to Class is in Future</p>
      <div className="font-['Afacad:Regular',sans-serif] font-normal h-[487px] leading-[0] relative shrink-0 text-[0px] text-neutral-100 w-full">
        <p className="leading-[44px] mb-[24px] text-[28px]">
          The first edition of Class is in Future takes place August 2–9, 2026 in Tallinn, Estonia,<span>{` a city celebrated for its digital innovation and bold ideas in education.`}</span> Over the course of one week, we will explore the frontiers of EdTech, bringing together educators, startups, investors, policymakers, and tech professionals from six continents. Our program is designed to be both inspiring and practical, with mornings dedicated to keynotes and panels, afternoons to breakout sessions, workshops, and pitch stages, and evenings filled with networking, cultural showcases, and social events.
        </p>
        <p className="leading-[44px] mb-[24px] text-[28px] whitespace-pre-wrap">
          On<span className="font-['Afacad:SemiBold',sans-serif] font-semibold text-[#6941c6]">{` Day 1`}</span>
          <span>{`; the opening night, you can expect to get settled, meet the community, and enjoy the evening cultural showcase alongside a light welcome dinner. Things get more heated as `}</span>
          <span className="font-['Afacad:SemiBold',sans-serif] font-semibold text-[#6941c6]">Day 2</span>
          <span>{` dives straight into Robotics in Education with keynotes, panels, and breakout sessions.  Get ready to engage in networking hubs and career fairs to fuel connections before the day closes with dinner, games, and karaoke.`}</span>
        </p>
        <p className="leading-[44px] text-[28px]">
          <span>{`Explore the full `}</span>E<span>{`vent `}</span>Schedule below but brace yourself, this is not like anything you have experienced before.
        </p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="[grid-area:1_/_1] h-[232px] ml-0 mt-0 relative w-[200px]" data-name="Component 1">
      <div className="absolute inset-[-1.08%_-1.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205 237">
          <g id="Component 1">
            <path d={svgPaths.p213401a0} id="Vector" stroke="var(--stroke-0, #A4BBF4)" strokeWidth="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return <div className="bg-[#a4bbf4] h-[48px] rounded-[8px] shrink-0 w-[20px]" />;
}

function Frame6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-between ml-[88px] mt-[112px] relative w-[64px]">
      {[...Array(2).keys()].map((_, i) => (
        <Frame8 key={i} />
      ))}
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Component />
      <Frame6 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[232px] left-0 top-0 w-[248px]" data-name="Component 1">
      <div className="absolute inset-[-1.08%_-1.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 253 237">
          <g id="Component 1">
            <path d={svgPaths.pf50bf00} id="Vector" stroke="var(--stroke-0, #EFC8C7)" strokeWidth="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return <div className="bg-[#efc8c7] h-[48px] rounded-[8px] shrink-0 w-[20px]" />;
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[60px]">
      {[...Array(2).keys()].map((_, i) => (
        <Frame9 key={i} />
      ))}
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[20px] h-[232px] items-center px-[64px] py-[90px] relative shrink-0 w-[248px]">
      <Component1 />
      <Frame20 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] top-[4px] w-[1680px]">
      <Group />
      <Frame7 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-black h-[997px] left-0 overflow-clip top-[120px] w-[1728px]">
      <p className="absolute font-['Afacad:Medium',sans-serif] font-medium h-[123px] leading-[90px] left-[calc(50%-748px)] text-[#e9eaeb] text-[224px] top-[calc(50%+391.5px)] tracking-[-4.48px] w-[1495px]">EVENT SCHEDULE</p>
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col font-['Afacad:Medium',sans-serif] font-medium items-center justify-center leading-[90px] relative shrink-0 text-[56px] text-black text-center tracking-[-1.12px] w-[750px]">
      <p className="h-[72px] relative shrink-0 w-full">Seven days. One city.</p>
      <p className="h-[72px] relative shrink-0 w-full">Endless ways to reimagine learning.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f9f6fe] h-[80px] relative rounded-br-[48px] rounded-tl-[48px] shrink-0">
      <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center justify-center overflow-clip px-[48px] py-[26px] relative rounded-[inherit]">
        <p className="font-['Afacad:SemiBold',sans-serif] font-semibold leading-[44px] relative shrink-0 text-[#6923d2] text-[32px] text-center text-nowrap whitespace-pre">Day 1</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#6923d2] border-solid inset-0 pointer-events-none rounded-br-[48px] rounded-tl-[48px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[80px] relative rounded-br-[48px] rounded-tl-[48px] shrink-0">
      <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center justify-center overflow-clip px-[48px] py-[26px] relative rounded-[inherit]">
        <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#414651] text-[32px] text-center text-nowrap whitespace-pre">Day 2</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#a4a7ae] border-[1.5px] border-solid inset-0 pointer-events-none rounded-br-[48px] rounded-tl-[48px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[80px] relative rounded-br-[48px] rounded-tl-[48px] shrink-0">
      <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center justify-center overflow-clip px-[48px] py-[26px] relative rounded-[inherit]">
        <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#414651] text-[32px] text-center text-nowrap whitespace-pre">Day 3</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#a4a7ae] border-[1.5px] border-solid inset-0 pointer-events-none rounded-br-[48px] rounded-tl-[48px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[80px] relative rounded-br-[48px] rounded-tl-[48px] shrink-0">
      <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center justify-center overflow-clip px-[48px] py-[26px] relative rounded-[inherit]">
        <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#414651] text-[32px] text-center text-nowrap whitespace-pre">Day 4</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#a4a7ae] border-[1.5px] border-solid inset-0 pointer-events-none rounded-br-[48px] rounded-tl-[48px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[80px] relative rounded-br-[48px] rounded-tl-[48px] shrink-0">
      <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center justify-center overflow-clip px-[48px] py-[26px] relative rounded-[inherit]">
        <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#414651] text-[32px] text-center text-nowrap whitespace-pre">Day 5</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#a4a7ae] border-[1.5px] border-solid inset-0 pointer-events-none rounded-br-[48px] rounded-tl-[48px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[80px] relative rounded-br-[48px] rounded-tl-[48px] shrink-0">
      <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center justify-center overflow-clip px-[48px] py-[26px] relative rounded-[inherit]">
        <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#414651] text-[32px] text-center text-nowrap whitespace-pre">Day 6</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#a4a7ae] border-[1.5px] border-solid inset-0 pointer-events-none rounded-br-[48px] rounded-tl-[48px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[80px] relative rounded-br-[48px] rounded-tl-[48px] shrink-0">
      <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center justify-center overflow-clip px-[48px] py-[26px] relative rounded-[inherit]">
        <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#414651] text-[32px] text-center text-nowrap whitespace-pre">Day 7</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#a4a7ae] border-[1.5px] border-solid inset-0 pointer-events-none rounded-br-[48px] rounded-tl-[48px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[61px] items-center relative shrink-0 w-full">
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[8.33%_10.42%]" data-name="elements">
      <div className="absolute inset-[-3.74%_-3.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 36">
          <g id="elements">
            <path d={svgPaths.p10de2100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.49405" />
            <path d={svgPaths.p7a38000} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.49405" />
            <path d={svgPaths.p2165fc52} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.49405" />
            <path d="M2.08036 11.247H32.0804" id="Vector 4049" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.49405" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="calendar-02">
      <Elements />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <Calendar />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#252b37] text-[40px] text-center text-nowrap whitespace-pre">Sunday, August 2</p>
    </div>
  );
}

function Elements1() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="elements">
      <div className="absolute inset-[-3.74%_-4.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 36">
          <g id="elements">
            <path d={svgPaths.p5b18300} id="Ellipse 1592" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2.49405" />
            <g id="Vector">
              <path d={svgPaths.p25499980} stroke="var(--stroke-0, black)" strokeWidth="2.49405" />
              <path d={svgPaths.pf67f580} stroke="var(--stroke-0, black)" strokeWidth="2.49405" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="location-09">
      <Elements1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
      <Location />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#252b37] text-[40px] text-center text-nowrap whitespace-pre">Kultuurikatel (Kursi, Tallinn)</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-[491px]">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full">
      <Frame30 />
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[200px] relative shrink-0 w-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 200">
        <g id="Frame 234">
          <circle cx="10" cy="10" fill="var(--fill-0, #D9D9D9)" id="Ellipse 1" r="10" />
          <g id="Frame 233">
            <rect fill="#D9D9D9" height="160" transform="translate(8 20)" width="4" />
          </g>
          <circle cx="10" cy="190" fill="var(--fill-0, #D9D9D9)" id="Ellipse 2" r="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[205px]">
      <p className="font-['Afacad:Medium',sans-serif] font-medium h-[108px] leading-[56px] relative shrink-0 text-[#414651] text-[44px] text-center tracking-[-0.88px] w-full">04:00pm to 06:30pm</p>
      <Frame33 />
      <p className="font-['Afacad:Medium',sans-serif] font-medium h-[108px] leading-[56px] relative shrink-0 text-[#414651] text-[44px] text-center tracking-[-0.88px] w-full">06:30pm to 08:00pm</p>
      <Frame33 />
      <p className="font-['Afacad:Medium',sans-serif] font-medium h-[108px] leading-[56px] relative shrink-0 text-[#414651] text-[44px] text-center tracking-[-0.88px] w-full">08:00pm to 09:00pm</p>
      <Frame33 />
      <p className="font-['Afacad:Medium',sans-serif] font-medium h-[108px] leading-[56px] relative shrink-0 text-[#414651] text-[44px] text-center tracking-[-0.88px] w-full">After 09:00pm</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start leading-[44px] left-[40px] top-[40px] w-[1199px]">
      <p className="font-['Afacad:Medium',sans-serif] font-medium relative shrink-0 text-[56px] text-white w-full">{`Arrival & Registration`}</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[131px] relative shrink-0 text-[32px] text-neutral-100 w-full">Check in online or on-site and get your conference badge. This window gives you ample time to settle in, meet fellow attendees, and explore the welcome lounge. Light refreshments will be served to keep the conversations flowing as you connect with peers from around the world.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#9662e5] h-[287px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div className="absolute h-[232px] left-[-96px] top-[103px] w-[203px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[232px] left-[1176px] top-[-40px] w-[203px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      </div>
      <Frame34 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start leading-[44px] left-[40px] top-[40px] w-[1199px]">
      <p className="font-['Afacad:Medium',sans-serif] font-medium relative shrink-0 text-[56px] text-white w-full">{`Welcome Dinner & Cultural Showcase`}</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[131px] relative shrink-0 text-[32px] text-neutral-100 w-full">We officially open Class is in Future 2026 with a dinner inspired by Estonian flavors, paired with a vibrant local performance that blends tradition with innovation. It’s the perfect setting to spark connections and set the tone for the week ahead.</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#9662e5] h-[287px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div className="absolute h-[232px] left-[-96px] top-[103px] w-[203px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[232px] left-[1176px] top-[-40px] w-[203px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      </div>
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start leading-[44px] left-[40px] top-[40px] w-[1199px]">
      <p className="font-['Afacad:Medium',sans-serif] font-medium relative shrink-0 text-[56px] text-white w-full">Networking Mixer</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[131px] relative shrink-0 text-[32px] text-neutral-100 w-full">An informal space to meet other educators, startups, investors, and tech professionals before the main program begins. Expect relaxed conversations, icebreaker activities, and a shared sense of anticipation for the days to come.</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#9662e5] h-[287px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div className="absolute h-[232px] left-[-96px] top-[103px] w-[203px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[232px] left-[1176px] top-[-40px] w-[203px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      </div>
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start leading-[44px] left-[40px] top-[40px] w-[1199px]">
      <p className="font-['Afacad:Medium',sans-serif] font-medium relative shrink-0 text-[56px] text-white w-full">Free Evening</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[131px] relative shrink-0 text-[32px] text-neutral-100 w-full">Unwind at your own pace, explore Tallinn’s nightlife and the vibrant old town, enjoy a quiet evening with new connections, or simply rest up for the start of the conference on Monday morning.</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#9662e5] h-[287px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div className="absolute h-[232px] left-[-96px] top-[103px] w-[203px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[232px] left-[1176px] top-[-40px] w-[203px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      </div>
      <Frame45 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[53px] items-start relative shrink-0 w-[1283px]">
      <Frame10 />
      <Frame43 />
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] items-start left-[80px] top-[1213px] w-[1568px]">
      <Frame40 />
      <Frame39 />
    </div>
  );
}

export default function AboutEventSchedulePage() {
  return (
    <div className="bg-white relative w-[1728px] h-[6000px]" data-name="About - Event Schedule page">
      {/* <Frame5 /> - Header removed, using shared Navigation */}
      {/* <Footer /> - Footer removed, using shared Footer */}
      <Frame19 />
      <Frame41 />
    </div>
  );
}