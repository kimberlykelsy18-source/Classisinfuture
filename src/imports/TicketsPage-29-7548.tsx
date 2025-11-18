import svgPaths from "./svg-ifti8wemfo";
import imgFrame274 from "figma:asset/5fe7aa9e1d4d47e3107d27223186044af8c10a33.png";

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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[232px] items-start relative shrink-0 w-full">
      <TextAndSupportingText />
      <EmailCapture />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
      <Frame6 />
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

function Frame10() {
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

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 w-full">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#d5d7da] text-[16px] text-nowrap whitespace-pre">© 2026 Class is in Future. All rights reserved.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div className="bg-[#e9eaeb] h-px shrink-0 w-full" data-name="Divider" />
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[160px] top-[64px] w-[1408px]">
      <Frame7 />
      <Frame10 />
      <Frame9 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black h-[711px] left-1/2 top-[3262px] translate-x-[-50%] w-[1728px]" data-name="Footer">
      <Frame11 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] min-w-full relative shrink-0 text-[56px] text-white tracking-[-1.12px] w-[min-content]">Your Pass to the Future of EdTech</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[175px] leading-[44px] relative shrink-0 text-[28px] text-neutral-100 w-[1133px]">Pick the ticket that fits your journey. Whether you’re here to spark ideas, code through the night, meet investors, or just soak it all in, there’s a seat (and a story) waiting for you. No hidden fees. No gate-keeping. Just access to conversations, connections, and opportunities that move education and technology forward.</p>
      <p className="font-['Afacad:Italic',sans-serif] font-normal h-[43px] italic leading-[44px] relative shrink-0 text-[#9e77ed] text-[28px] w-[1133px]">Tip: Hackathon spots are limited, secure yours when you grab your ticket.</p>
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute bottom-[22.92%] left-1/4 right-1/4 top-[22.92%]" data-name="elements">
      <div className="absolute inset-[-5.77%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 58">
          <g id="elements">
            <path d={svgPaths.p31a6100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            <path d={svgPaths.p16b86100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowDownDoubleRound() {
  return (
    <div className="overflow-clip relative shrink-0 size-[96px]" data-name="arrow-down-double-round">
      <Elements />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-center justify-center left-[300px] top-[377px] w-[1129px]">
      <Frame36 />
      <ArrowDownDoubleRound />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[32px] top-1/2 translate-y-[-50%]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[1558px] top-[calc(50%-346.5px)] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "813", "--transform-inner-height": "138" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[138px] leading-[90px] relative text-[256px] tracking-[-5.12px] w-[813px]">TICKETS</p>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[32px] top-[calc(50%-466.5px)] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "813", "--transform-inner-height": "138" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[138px] leading-[90px] relative text-[256px] tracking-[-5.12px] w-[813px]">TICKETS</p>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute h-[997px] left-0 overflow-clip top-[120px] w-[1728px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame274} />
      </div>
      <Frame42 />
      <Group4 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[185px] items-center relative shrink-0 text-center w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] min-w-full relative shrink-0 text-[56px] text-black tracking-[-1.12px] w-[min-content]">Pick Your Adventure</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[87px] leading-[44px] relative shrink-0 text-[#252b37] text-[32px] w-[1320px]">No two journeys are the same. Some come to learn, some to pitch, some to code till sunrise. Whatever brings you here, there’s a ticket with your name on it.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between leading-[32px] relative shrink-0 w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium relative shrink-0 text-[64px] w-[472px]">General Admission</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal relative shrink-0 text-[56px] w-[120px]">$200</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 text-[#3769e6] w-full">
      <Frame13 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[24px] w-full">For professionals, enthusiasts, and changemakers looking to experience the full conference.</p>
    </div>
  );
}

function Frame12() {
  return <div className="bg-white h-[2px] shrink-0 w-[16px]" />;
}

function Frame24() {
  return (
    <div className="bg-[#c9d6f8] content-stretch flex gap-[4px] h-[2px] items-center relative shrink-0 w-full">
      {[...Array(33).keys()].map((_, i) => (
        <Frame12 key={i} />
      ))}
    </div>
  );
}

function FoundationAsterisk() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #3769E6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3769e6] text-[24px] w-[625px]">Access to all 5 days of keynote panels and breakout sessions across the EdTech industry.</p>
    </div>
  );
}

function FoundationAsterisk1() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #3769E6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk1 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3769e6] text-[24px] w-[625px]">Explore the exhibition hall with startup showcases, EdTech solutions, career fairs, and partner booths.</p>
    </div>
  );
}

function FoundationAsterisk2() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #3769E6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk2 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3769e6] text-[24px] w-[625px]">Join daily networking breaks, cultural showcases, and evening socials.</p>
    </div>
  );
}

function FoundationAsterisk3() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #3769E6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk3 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3769e6] text-[24px] w-[625px]">Eligibility to partake in the Hackathon session (a chance to build in public).</p>
    </div>
  );
}

function FoundationAsterisk4() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #3769E6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk4 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3769e6] text-[24px] w-[625px]">An opportunity to partake in the wind-down day with access to tours, fun activities, and the official afterparty.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <Frame21 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3769e6] text-[0px] text-[24px] text-black text-center w-full">
        <span className="font-['Afacad:Bold',sans-serif] font-bold">STUDENT DISCOUNT:</span>
        <span>{` 50% off (just $100 with valid ID).`}</span>
      </p>
    </div>
  );
}

function ButtonBase28() {
  return (
    <div className="bg-[#6923d2] h-[56px] relative rounded-[8px] shrink-0 w-[200px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[200px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Get Ticket</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6923d2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-center justify-center ml-[32px] mt-[96px] relative w-[656px]">
      <Frame27 />
      <Frame24 />
      <Frame22 />
      <ButtonBase28 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[800px] ml-0 mt-0 relative w-[720px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 720 800">
          <path d={svgPaths.p2d549580} fill="var(--fill-0, #DBE4FA)" id="Rectangle 2" stroke="var(--stroke-0, #3769E6)" />
        </svg>
      </div>
      <Frame28 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[32px] relative shrink-0 w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium relative shrink-0 text-[64px] w-[472px]">Startup Pass</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal relative shrink-0 text-[56px] w-[120px]">$300</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 text-[#4f9d39] w-full">
      <Frame25 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[24px] w-full">For founders, co-founders, and startup teams ready to showcase and grow.</p>
    </div>
  );
}

function Frame26() {
  return <div className="bg-white h-[2px] shrink-0 w-[16px]" />;
}

function Frame34() {
  return (
    <div className="bg-[#bfe4b4] content-stretch flex gap-[4px] h-[2px] items-center relative shrink-0 w-full">
      {[...Array(33).keys()].map((_, i) => (
        <Frame26 key={i} />
      ))}
    </div>
  );
}

function FoundationAsterisk5() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #4F9D39)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk5 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4f9d39] text-[24px] w-[625px]">Access to all the benefits included in the General Admission pass.</p>
    </div>
  );
}

function FoundationAsterisk6() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #4F9D39)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk6 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4f9d39] text-[24px] w-[625px]">{`Eligibility to partake in the Startup Showcase & Pitch Day and pitch onstage to investors and partners.`}</p>
    </div>
  );
}

function FoundationAsterisk7() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #4F9D39)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk7 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4f9d39] text-[24px] w-[625px]">Feature your product and features (with a pop-up booth option).</p>
    </div>
  );
}

function FoundationAsterisk8() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #4F9D39)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk8 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4f9d39] text-[24px] w-[625px]">Access to investors, mentors, and networking sessions with education leaders.</p>
    </div>
  );
}

function FoundationAsterisk9() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #4F9D39)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk9 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4f9d39] text-[24px] w-[625px]">Visibility in the Startup brochure shared with attendees, investors, and partners.</p>
    </div>
  );
}

function FoundationAsterisk10() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #4F9D39)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk10 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4f9d39] text-[24px] w-[625px] whitespace-pre-wrap">{`Access to global media coverage opportunities and 1:1 mentor office hours with industry experts.  `}</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame43 />
    </div>
  );
}

function ButtonBase29() {
  return (
    <div className="bg-[#6923d2] h-[56px] relative rounded-[8px] shrink-0 w-[200px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[200px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Get Ticket</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6923d2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-center justify-center ml-[32px] mt-[96px] relative w-[656px]">
      <Frame14 />
      <Frame34 />
      <Frame44 />
      <ButtonBase29 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[800px] ml-0 mt-0 relative w-[720px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 720 800">
          <path d={svgPaths.p2d549580} fill="var(--fill-0, #DFF1DA)" id="Rectangle 2" stroke="var(--stroke-0, #3C782C)" />
        </svg>
      </div>
      <Frame29 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[32px] relative shrink-0 w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium relative shrink-0 text-[64px] w-[472px]">Investor Pass</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal relative shrink-0 text-[56px] w-[120px]">$400</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 text-[#ff5c93] w-full">
      <Frame45 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[24px] w-full">For venture capitalists, angels, and ecosystem builders scouting the next big thing.</p>
    </div>
  );
}

function Frame46() {
  return <div className="bg-white h-[2px] shrink-0 w-[16px]" />;
}

function Frame47() {
  return (
    <div className="bg-[#ffc2d6] content-stretch flex gap-[4px] h-[2px] items-center relative shrink-0 w-full">
      {[...Array(33).keys()].map((_, i) => (
        <Frame46 key={i} />
      ))}
    </div>
  );
}

function FoundationAsterisk11() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #FF5C93)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk11 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#ff5c93] text-[24px] w-[625px]">Access to all the benefits included in the General Admission pass.</p>
    </div>
  );
}

function FoundationAsterisk12() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #FF5C93)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk12 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#ff5c93] text-[24px] w-[625px]">{`Priority seating for the Startup Showcase & Pitch Day and access to the Startup brochure.`}</p>
    </div>
  );
}

function FoundationAsterisk13() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #FF5C93)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk13 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#ff5c93] text-[24px] w-[625px]">Explore startup showcases and have early access to participate in networking opportunities.</p>
    </div>
  );
}

function FoundationAsterisk14() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #FF5C93)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk14 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#ff5c93] text-[24px] w-[625px]">Access to closed-off deal rooms for curated Investor–Startup meetings.</p>
    </div>
  );
}

function FoundationAsterisk15() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #FF5C93)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk15 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#ff5c93] text-[24px] w-[625px]">Invitation to the VIP Dinner with founders, partners, and keynote speakers.</p>
    </div>
  );
}

function FoundationAsterisk16() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #FF5C93)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk16 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#ff5c93] text-[24px] w-[625px]">Access to the exclusive VIP networking lounge during the event.</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function ButtonBase30() {
  return (
    <div className="bg-[#6923d2] h-[56px] relative rounded-[8px] shrink-0 w-[200px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[200px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Get Ticket</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6923d2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[grid-area:1_/_1] bg-[#ffd6e4] box-border content-stretch flex flex-col gap-[32px] items-center justify-center ml-[32px] mt-[96px] relative w-[656px]">
      <Frame15 />
      <Frame47 />
      <Frame54 />
      <ButtonBase30 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[800px] ml-0 mt-0 relative w-[720px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 720 800">
          <path d={svgPaths.p2d549580} fill="var(--fill-0, #FFD6E4)" id="Rectangle 2" stroke="var(--stroke-0, #FF5C93)" />
        </svg>
      </div>
      <Frame30 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[32px] relative shrink-0 w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium relative shrink-0 text-[64px] w-[472px]">VIP Pass</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal relative shrink-0 text-[56px] w-[120px]">$500</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 text-[#9059e3] w-full">
      <Frame55 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[24px] w-full">For world leaders, company executives, and those seeking elevated access.</p>
    </div>
  );
}

function Frame57() {
  return <div className="bg-white h-[2px] shrink-0 w-[16px]" />;
}

function Frame59() {
  return (
    <div className="bg-[#dccbf6] content-stretch flex gap-[4px] h-[2px] items-center relative shrink-0 w-full">
      {[...Array(33).keys()].map((_, i) => (
        <Frame57 key={i} />
      ))}
    </div>
  );
}

function FoundationAsterisk17() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #9059E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk17 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9059e3] text-[24px] w-[625px]">Access to all the benefits included in the General Admission pass.</p>
    </div>
  );
}

function FoundationAsterisk18() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #9059E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk18 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9059e3] text-[24px] w-[625px]">Reserved seating at all keynote panels and breakout sessions during the conference.</p>
    </div>
  );
}

function FoundationAsterisk19() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #9059E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk19 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9059e3] text-[24px] w-[625px]">Interact in closed-door one-on-one investor and partner networking sessions.</p>
    </div>
  );
}

function FoundationAsterisk20() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #9059E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk20 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9059e3] text-[24px] w-[625px]">{`Access to fast-tracked VIP registration check-in & concierge support.`}</p>
    </div>
  );
}

function FoundationAsterisk21() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #9059E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk21 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9059e3] text-[24px] w-[625px]">Invitation to the VIP Dinner with founders, partners, and keynote speakers.</p>
    </div>
  );
}

function FoundationAsterisk22() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="foundation:asterisk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="foundation:asterisk">
          <path d={svgPaths.p3779f080} fill="var(--fill-0, #9059E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <FoundationAsterisk22 />
      <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9059e3] text-[24px] w-[625px]">Access to the exclusive VIP networking lounge during the event.</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full">
      <Frame60 />
      <Frame61 />
      <Frame62 />
      <Frame63 />
      <Frame23 />
      <Frame64 />
    </div>
  );
}

function ButtonBase31() {
  return (
    <div className="bg-[#6923d2] h-[56px] relative rounded-[8px] shrink-0 w-[200px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[200px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Get Ticket</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6923d2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-center justify-center ml-[32px] mt-[96px] relative w-[656px]">
      <Frame56 />
      <Frame59 />
      <Frame65 />
      <ButtonBase31 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[800px] ml-0 mt-0 relative w-[720px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 720 800">
          <path d={svgPaths.p2d549580} fill="var(--fill-0, #E8DCF9)" id="Rectangle 2" stroke="var(--stroke-0, #9059E3)" />
        </svg>
      </div>
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-start flex flex-wrap gap-[48px] h-[1648px] items-start leading-[0] relative shrink-0 w-full">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] items-start left-[120px] top-[1213px] w-[1488px]">
      <Frame33 />
      <Frame32 />
    </div>
  );
}

export default function TicketsPage() {
  return (
    <div className="bg-white relative size-full" data-name="Tickets page">
      <Frame5 />
      <Footer />
      <Frame58 />
      <Frame41 />
    </div>
  );
}