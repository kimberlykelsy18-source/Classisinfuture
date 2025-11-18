import svgPaths from "./svg-c8paep7759";
import imgFrame200 from "figma:asset/f1051776867ae06b2f03e2524d383d2fef242202.png";
import imgRectangle3 from "figma:asset/99cdaace4e310a0b4edfeae485e731782d7cef84.png";
import imgFrame254 from "figma:asset/b806e190ba51eafbf9037c88dcab82f1badc53d2.png";
import imgFrame252 from "figma:asset/83f9758adf8c548c9e27f84612c2553cff082fa8.png";
import imgFrame255 from "figma:asset/bb7abad29f2f7d3ff2308383f1724b4c5145542a.png";
import imgFrame257 from "figma:asset/b712590c0a54931761468307161ea0ddd3a995f0.png";
import imgFrame256 from "figma:asset/880c99efedf85ff390c3ff5b6a5879b2bf4b77a3.png";
import imgFrame253 from "figma:asset/3c1ba9e7e2ea1dcc65b3dfe36681f42b7265e7b2.png";

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
    <div className="absolute bg-black h-[711px] left-1/2 top-[5276px] translate-x-[-50%] w-[1728px]" data-name="Footer">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] relative shrink-0 text-[56px] text-black tracking-[-1.12px] w-[1488px]">Why You Should Exhibit</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[219px] leading-[44px] relative shrink-0 text-[#252b37] text-[32px] w-[1280px]">At Class is in Future, exhibitors aren’t background noise, you’re part of the conversation. Booths sit at the heart of the venue, alongside networking hubs and career fairs, ensuring a steady flow of engaged visitors. From startups unveiling their first product to global leaders in EdTech, every booth tells a story worth experiencing. We believe that your booth is more than a stand, it’s your stage. You’re at the center of it all and all eyes are on you.</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents font-['Afacad:Medium',sans-serif] font-medium leading-[90px] left-1/2 text-[#7a271a] text-[200px] top-1/2 tracking-[-4px] translate-x-[-50%] translate-y-[-50%]">
      <p className="absolute h-[107px] left-[calc(50%+256px)] top-[calc(50%+189px)] w-[488px]">STAGE</p>
      <p className="absolute h-[107px] left-[calc(50%-744px)] top-[calc(50%-296px)] w-[449px]">YOUR</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[640px] overflow-clip relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[290.63%] left-0 max-w-none top-[-162.19%] w-full" src={imgFrame200} />
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function ButtonBase28() {
  return (
    <div className="bg-[#6923d2] h-[80px] relative rounded-[8px] shrink-0 w-[400px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[80px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[400px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Reserve a Booth</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6923d2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Button28() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[400px]" data-name="Button">
      <ButtonBase28 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-center left-1/2 top-[1157px] translate-x-[-50%] w-[1488px]">
      <Frame15 />
      <Button28 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-0 top-[120px]">
      <div className="absolute h-[997px] left-0 top-[120px] w-[1728px]">
        <div className="absolute bottom-[4.45%] left-0 right-0 top-0">
          <img alt="" className="block max-w-none size-full" height="952.584" src={imgRectangle3} width="1728" />
        </div>
      </div>
      <p className="absolute font-['Afacad:Regular',sans-serif] font-normal h-[123px] leading-[120px] left-[calc(50%-367px)] text-[#e9eaeb] text-[160px] top-[calc(50%-2436.5px)] tracking-[-3.2px] w-[735px]">Get a Booth</p>
    </div>
  );
}

function LinePattern() {
  return (
    <div className="absolute left-1/2 size-[800px] top-[552px] translate-x-[-50%]" data-name="Line pattern">
      <div className="absolute bottom-0 left-[-0.06%] right-[-0.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 801 800">
          <g id="Line pattern">
            <path clipRule="evenodd" d={svgPaths.p1eaaf780} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p16577380} fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1cf36600} fillRule="evenodd" id="Vector_3" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2e8f0e00} fillRule="evenodd" id="Vector_4" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p334b6d00} fillRule="evenodd" id="Vector_5" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1fcad240} fillRule="evenodd" id="Vector_6" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2918bc80} fillRule="evenodd" id="Vector_7" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1d143b00} fillRule="evenodd" id="Vector_8" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p219bef00} fillRule="evenodd" id="Vector_9" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p269c4a00} fillRule="evenodd" id="Vector_10" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p6c40800} fillRule="evenodd" id="Vector_11" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3b84400} fillRule="evenodd" id="Vector_12" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p14476380} fillRule="evenodd" id="Vector_13" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1cc06780} fillRule="evenodd" id="Vector_14" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p12cac40} fillRule="evenodd" id="Vector_15" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p168a0300} fillRule="evenodd" id="Vector_16" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2fef4400} fillRule="evenodd" id="Vector_17" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2e0f3580} fillRule="evenodd" id="Vector_18" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p38827400} fillRule="evenodd" id="Vector_19" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3d48e880} fillRule="evenodd" id="Vector_20" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3310200} fillRule="evenodd" id="Vector_21" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p14c81280} fillRule="evenodd" id="Vector_22" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p339da380} fillRule="evenodd" id="Vector_23" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p17416400} fillRule="evenodd" id="Vector_24" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p21117f80} fillRule="evenodd" id="Vector_25" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p7b50600} fillRule="evenodd" id="Vector_26" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p366ce200} fillRule="evenodd" id="Vector_27" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p4b01800} fillRule="evenodd" id="Vector_28" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p330ee500} fillRule="evenodd" id="Vector_29" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p16833380} fillRule="evenodd" id="Vector_30" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3129dc30} fillRule="evenodd" id="Vector_31" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p374f3c00} fillRule="evenodd" id="Vector_32" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.pc58900} fillRule="evenodd" id="Vector_33" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1bfd3000} fillRule="evenodd" id="Vector_34" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2718bb00} fillRule="evenodd" id="Vector_35" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p23d4d900} fillRule="evenodd" id="Vector_36" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2cf57900} fillRule="evenodd" id="Vector_37" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p8cd9a00} fillRule="evenodd" id="Vector_38" stroke="var(--stroke-0, #F5F5F5)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[8px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame254} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[240px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame252} />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[48px] w-full">Startup Booth</p>
      <ul className="block font-['Afacad:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[20px] w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[24px]">Designed for early-stage startups launching or demoing their first product or big idea.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[24px]">Gain visibility with educators, investors, and potential partners.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[24px]">Includes a full-sized booth space, access to networking lounges, and visibility in the startup showcase section of the event site.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[24px]">Comes with 1 exhibitor pass and inclusion in the digital exhibitor directory.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame27 />
    </div>
  );
}

function ButtonBase29() {
  return (
    <div className="bg-[#6923d2] h-[48px] relative rounded-[8px] shrink-0 w-[200px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[200px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Purchase Booth</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6923d2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Button29() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[200px]" data-name="Button">
      <ButtonBase29 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[24px] top-[24px] w-[408px]">
      <Frame28 />
      <Button29 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white h-[736px] relative rounded-[16px] shrink-0 w-[456px]">
      <div className="h-[736px] overflow-clip relative rounded-[inherit] w-[456px]">
        <LinePattern />
        <Frame29 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function LinePattern1() {
  return (
    <div className="absolute left-1/2 size-[800px] top-[552px] translate-x-[-50%]" data-name="Line pattern">
      <div className="absolute bottom-0 left-[-0.06%] right-[-0.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 801 800">
          <g id="Line pattern">
            <path clipRule="evenodd" d={svgPaths.p1eaaf780} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p16577380} fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1cf36600} fillRule="evenodd" id="Vector_3" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2e8f0e00} fillRule="evenodd" id="Vector_4" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p334b6d00} fillRule="evenodd" id="Vector_5" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1fcad240} fillRule="evenodd" id="Vector_6" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2918bc80} fillRule="evenodd" id="Vector_7" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1d143b00} fillRule="evenodd" id="Vector_8" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p219bef00} fillRule="evenodd" id="Vector_9" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p269c4a00} fillRule="evenodd" id="Vector_10" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p6c40800} fillRule="evenodd" id="Vector_11" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3b84400} fillRule="evenodd" id="Vector_12" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p14476380} fillRule="evenodd" id="Vector_13" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1cc06780} fillRule="evenodd" id="Vector_14" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p12cac40} fillRule="evenodd" id="Vector_15" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p168a0300} fillRule="evenodd" id="Vector_16" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2fef4400} fillRule="evenodd" id="Vector_17" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2e0f3580} fillRule="evenodd" id="Vector_18" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p38827400} fillRule="evenodd" id="Vector_19" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3d48e880} fillRule="evenodd" id="Vector_20" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3310200} fillRule="evenodd" id="Vector_21" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p14c81280} fillRule="evenodd" id="Vector_22" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p339da380} fillRule="evenodd" id="Vector_23" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p17416400} fillRule="evenodd" id="Vector_24" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p21117f80} fillRule="evenodd" id="Vector_25" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p7b50600} fillRule="evenodd" id="Vector_26" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p366ce200} fillRule="evenodd" id="Vector_27" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p4b01800} fillRule="evenodd" id="Vector_28" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p330ee500} fillRule="evenodd" id="Vector_29" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p16833380} fillRule="evenodd" id="Vector_30" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3129dc30} fillRule="evenodd" id="Vector_31" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p374f3c00} fillRule="evenodd" id="Vector_32" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.pc58900} fillRule="evenodd" id="Vector_33" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1bfd3000} fillRule="evenodd" id="Vector_34" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2718bb00} fillRule="evenodd" id="Vector_35" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p23d4d900} fillRule="evenodd" id="Vector_36" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2cf57900} fillRule="evenodd" id="Vector_37" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p8cd9a00} fillRule="evenodd" id="Vector_38" stroke="var(--stroke-0, #F5F5F5)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[8px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame255} />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[240px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame257} />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[48px] w-full">Growth Booth</p>
      <ul className="block font-['Afacad:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[20px] w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[24px]">Ideal for growing tech companies, accelerators, and mid-stage ventures ready to reach new markets.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[24px]">Enjoy a full-sized booth space in the exhibition hall with priority placement, inclusion in press materials, and one sponsored social feature pre-event.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[24px]">Includes 2 exhibitor passes and participation in the product walkthrough with investors.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Frame42 />
    </div>
  );
}

function ButtonBase30() {
  return (
    <div className="bg-[#6923d2] h-[48px] relative rounded-[8px] shrink-0 w-[200px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[200px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Purchase Booth</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6923d2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Button30() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[200px]" data-name="Button">
      <ButtonBase30 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[24px] top-[24px] w-[408px]">
      <Frame30 />
      <Button30 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white h-[736px] relative rounded-[16px] shrink-0 w-[456px]">
      <div className="h-[736px] overflow-clip relative rounded-[inherit] w-[456px]">
        <LinePattern1 />
        <Frame31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function LinePattern2() {
  return (
    <div className="absolute left-1/2 size-[800px] top-[552px] translate-x-[-50%]" data-name="Line pattern">
      <div className="absolute bottom-0 left-[-0.06%] right-[-0.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 801 800">
          <g id="Line pattern">
            <path clipRule="evenodd" d={svgPaths.p1eaaf780} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p16577380} fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1cf36600} fillRule="evenodd" id="Vector_3" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2e8f0e00} fillRule="evenodd" id="Vector_4" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p334b6d00} fillRule="evenodd" id="Vector_5" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1fcad240} fillRule="evenodd" id="Vector_6" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2918bc80} fillRule="evenodd" id="Vector_7" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1d143b00} fillRule="evenodd" id="Vector_8" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p219bef00} fillRule="evenodd" id="Vector_9" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p269c4a00} fillRule="evenodd" id="Vector_10" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p6c40800} fillRule="evenodd" id="Vector_11" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3b84400} fillRule="evenodd" id="Vector_12" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p14476380} fillRule="evenodd" id="Vector_13" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1cc06780} fillRule="evenodd" id="Vector_14" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p12cac40} fillRule="evenodd" id="Vector_15" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p168a0300} fillRule="evenodd" id="Vector_16" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2fef4400} fillRule="evenodd" id="Vector_17" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2e0f3580} fillRule="evenodd" id="Vector_18" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p38827400} fillRule="evenodd" id="Vector_19" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3d48e880} fillRule="evenodd" id="Vector_20" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3310200} fillRule="evenodd" id="Vector_21" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p14c81280} fillRule="evenodd" id="Vector_22" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p339da380} fillRule="evenodd" id="Vector_23" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p17416400} fillRule="evenodd" id="Vector_24" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p21117f80} fillRule="evenodd" id="Vector_25" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p7b50600} fillRule="evenodd" id="Vector_26" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p366ce200} fillRule="evenodd" id="Vector_27" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p4b01800} fillRule="evenodd" id="Vector_28" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p330ee500} fillRule="evenodd" id="Vector_29" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p16833380} fillRule="evenodd" id="Vector_30" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p3129dc30} fillRule="evenodd" id="Vector_31" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p374f3c00} fillRule="evenodd" id="Vector_32" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.pc58900} fillRule="evenodd" id="Vector_33" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p1bfd3000} fillRule="evenodd" id="Vector_34" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2718bb00} fillRule="evenodd" id="Vector_35" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p23d4d900} fillRule="evenodd" id="Vector_36" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2cf57900} fillRule="evenodd" id="Vector_37" stroke="var(--stroke-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p8cd9a00} fillRule="evenodd" id="Vector_38" stroke="var(--stroke-0, #F5F5F5)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[8px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame256} />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[240px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame253} />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[48px] w-full">Partner Booth</p>
      <ul className="block font-['Afacad:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[20px] w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[24px]">Tailored for institutions, organizations, and established EdTech leaders looking to amplify their presence across the entire conference.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[24px]">Comes with a full-sized booth space positioned near the networking or demo zone for maximum engagement.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[24px]">Includes 3 exhibitor passes, premium logo placement across event materials, and media access for interviews or coverage.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame43 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame44 />
    </div>
  );
}

function ButtonBase31() {
  return (
    <div className="bg-[#6923d2] h-[48px] relative rounded-[8px] shrink-0 w-[200px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[200px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Purchase Booth</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#6923d2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Button31() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[200px]" data-name="Button">
      <ButtonBase31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[24px] top-[24px] w-[408px]">
      <Frame32 />
      <Button31 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white h-[736px] relative rounded-[16px] shrink-0 w-[456px]">
      <div className="h-[736px] overflow-clip relative rounded-[inherit] w-[456px]">
        <LinePattern2 />
        <Frame33 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[60px] h-[736px] items-center relative w-full">
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative text-center w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] relative shrink-0 text-[56px] text-black tracking-[-1.12px] w-[1488px]">Pick a Booth</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[43px] leading-[44px] relative shrink-0 text-[#252b37] text-[32px] w-[1320px]">Every booth the same size, but structured for different goals.</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative w-[1488px]">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] w-full">
          <Frame34 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[12.028px] relative rounded-[8px] w-[48.111px]">
      <div aria-hidden="true" className="absolute border-2 border-[#6e92ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(91.67%-10px)] top-[835px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6983823180198669)+(var(--transform-inner-height)*0.6983823180198669)))] items-center justify-center left-[calc(91.67%+12.96px)] top-[835px] w-[calc(1px*((var(--transform-inner-height)*0.7157248854637146)+(var(--transform-inner-width)*0.7157248854637146)))]" style={{ "--transform-inner-width": "48.09375", "--transform-inner-height": "12.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[135.703deg] skew-x-[1.405deg]">
          {[...Array(2).keys()].map((_, i) => (
            <Frame17 key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6983823180198669)+(var(--transform-inner-height)*0.6983823180198669)))] items-center justify-center left-[calc(91.67%-10px)] top-[835px] w-[calc(1px*((var(--transform-inner-height)*0.7157248854637146)+(var(--transform-inner-width)*0.7157248854637146)))]" style={{ "--transform-inner-width": "48.09375", "--transform-inner-height": "12.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[44.297deg] skew-x-[358.595deg]" />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="h-[12.028px] relative rounded-[8px] w-[48.111px]">
      <div aria-hidden="true" className="absolute border-2 border-[#56aa3e] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[40px] top-[835px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6983823180198669)+(var(--transform-inner-height)*0.6983823180198669)))] items-center justify-center left-[40px] top-[835px] w-[calc(1px*((var(--transform-inner-height)*0.7157248854637146)+(var(--transform-inner-width)*0.7157248854637146)))]" style={{ "--transform-inner-width": "48.09375", "--transform-inner-height": "12.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[315.703deg] skew-x-[1.405deg]">
          {[...Array(2).keys()].map((_, i) => (
            <Frame45 key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6983823180198669)+(var(--transform-inner-height)*0.6983823180198669)))] items-center justify-center left-[62.96px] top-[835px] w-[calc(1px*((var(--transform-inner-height)*0.7157248854637146)+(var(--transform-inner-width)*0.7157248854637146)))]" style={{ "--transform-inner-width": "48.09375", "--transform-inner-height": "12.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[224.297deg] skew-x-[358.595deg]" />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="h-[12.028px] relative rounded-[8px] w-[48.111px]">
      <div aria-hidden="true" className="absolute border-2 border-[#cbb1f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(91.67%-10px)] top-[200px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6983823180198669)+(var(--transform-inner-height)*0.6983823180198669)))] items-center justify-center left-[calc(91.67%-10px)] top-[200px] w-[calc(1px*((var(--transform-inner-height)*0.7157248854637146)+(var(--transform-inner-width)*0.7157248854637146)))]" style={{ "--transform-inner-width": "48.09375", "--transform-inner-height": "12.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[315.703deg] skew-x-[1.405deg]">
          {[...Array(2).keys()].map((_, i) => (
            <Frame46 key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6983823180198669)+(var(--transform-inner-height)*0.6983823180198669)))] items-center justify-center left-[calc(91.67%+12.96px)] top-[200px] w-[calc(1px*((var(--transform-inner-height)*0.7157248854637146)+(var(--transform-inner-width)*0.7157248854637146)))]" style={{ "--transform-inner-width": "48.09375", "--transform-inner-height": "12.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[224.297deg] skew-x-[358.595deg]" />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-[12.028px] relative rounded-[8px] w-[48.111px]">
      <div aria-hidden="true" className="absolute border-2 border-[#ff76a4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[40px] top-[200px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6983823180198669)+(var(--transform-inner-height)*0.6983823180198669)))] items-center justify-center left-[62.96px] top-[200px] w-[calc(1px*((var(--transform-inner-height)*0.7157248854637146)+(var(--transform-inner-width)*0.7157248854637146)))]" style={{ "--transform-inner-width": "48.09375", "--transform-inner-height": "12.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[135.703deg] skew-x-[1.405deg]">
          {[...Array(2).keys()].map((_, i) => (
            <Frame47 key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6983823180198669)+(var(--transform-inner-height)*0.6983823180198669)))] items-center justify-center left-[40px] top-[200px] w-[calc(1px*((var(--transform-inner-height)*0.7157248854637146)+(var(--transform-inner-width)*0.7157248854637146)))]" style={{ "--transform-inner-width": "48.09375", "--transform-inner-height": "12.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[44.297deg] skew-x-[358.595deg]" />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[120px] text-center top-[2641px] w-[1488px]">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] relative shrink-0 text-[56px] text-white tracking-[-1.12px] w-[1488px]">Before You Apply</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[43px] leading-[44px] relative shrink-0 text-[32px] text-neutral-50 w-[1280px]">Here’s everything you need to know before reserving your space for a booth.</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[24px] relative shrink-0 text-[#c9d6f8] text-[20px] text-center w-[414px]">
      <p className="font-['Afacad:SemiBold',sans-serif] font-semibold h-[26px] relative shrink-0 w-full">{`Location & Dates`}</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[122px] relative shrink-0 w-full whitespace-pre-wrap">{`All booths will be hosted at Kultuurikatel, Tallinn, Estonia, during the Class Is in Future Conference taking place from August 2–9, 2025.                                                                                                      Booth setup opens August 1 (10:00 AM – 6:00 PM) and tear-down begins August 9 (after 4:00 PM).`}</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[626.801px] relative w-[684.748px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 627">
        <g id="Group 22">
          <path d={svgPaths.p33d59a80} id="Ellipse 3" stroke="var(--stroke-0, #6E92ED)" />
          <path d={svgPaths.p26e11580} id="Ellipse 4" stroke="var(--stroke-0, #6E92ED)" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-[48px] px-[222px] py-[335px] top-[2679px] w-[856px]">
      <Frame39 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.3420201539993286)+(var(--transform-inner-height)*0.9396926164627075)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.3420201539993286)+(var(--transform-inner-width)*0.9396926164627075)))]" style={{ "--transform-inner-width": "684.734375", "--transform-inner-height": "626.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[340deg]">
          <Group5 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[24px] relative shrink-0 text-[#ffc2d6] text-[20px] text-center w-[414px]">
      <p className="font-['Afacad:SemiBold',sans-serif] font-semibold h-[26px] relative shrink-0 w-full">What’s Included</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[122px] relative shrink-0 w-full">Each booth (regardless of type) includes: a modular 3m x 3m space with back wall, name signage, a TV, 2 power outlets, high-speed internet access, a high table, and 2 side chairs, including cleaning and security during exhibition hours.</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="h-[626.801px] relative w-[684.748px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 627">
        <g id="Group 22">
          <path d={svgPaths.p33d59a80} id="Ellipse 3" stroke="var(--stroke-0, #FF76A4)" />
          <path d={svgPaths.p26e11580} id="Ellipse 4" stroke="var(--stroke-0, #FF76A4)" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-[calc(41.67%+104px)] px-[222px] py-[335px] top-[2679px] w-[856px]">
      <Frame48 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.3420201539993286)+(var(--transform-inner-height)*0.9396926164627075)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.3420201539993286)+(var(--transform-inner-width)*0.9396926164627075)))]" style={{ "--transform-inner-width": "684.734375", "--transform-inner-height": "626.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[340deg]">
          <Group12 />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[48px] top-[2679px]">
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[24px] relative shrink-0 text-[#dccbf6] text-[20px] text-center w-[414px]">
      <p className="font-['Afacad:SemiBold',sans-serif] font-semibold h-[26px] relative shrink-0 w-full">{`Eligibility & Application`}</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[122px] relative shrink-0 w-full">Startups, Growth exhibitors, and Partners must be focused on technology or innovation in education. Applications are reviewed on a rolling basis; early applications receive priority placement and media exposure.</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="h-[626.801px] relative w-[684.748px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 627">
        <g id="Group 22">
          <path d={svgPaths.p33d59a80} id="Ellipse 3" stroke="var(--stroke-0, #AD85EB)" />
          <path d={svgPaths.p26e11580} id="Ellipse 4" stroke="var(--stroke-0, #AD85EB)" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-[48px] px-[222px] py-[335px] top-[3281px] w-[856px]">
      <Frame49 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.3420201539993286)+(var(--transform-inner-height)*0.9396926164627075)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.3420201539993286)+(var(--transform-inner-width)*0.9396926164627075)))]" style={{ "--transform-inner-width": "684.734375", "--transform-inner-height": "626.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[340deg]">
          <Group13 />
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[24px] relative shrink-0 text-[#d8efd2] text-[20px] text-center w-[414px]">
      <p className="font-['Afacad:SemiBold',sans-serif] font-semibold h-[26px] relative shrink-0 w-full">{`Setup & Support`}</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[122px] relative shrink-0 w-full">Our onsite team will assist with booth setup and logistics. International exhibitors can ship product and demo materials in advance; more details will be shared after the booth purchase has been confirmed.</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="h-[626.801px] relative w-[684.748px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 627">
        <g id="Group 22">
          <path d={svgPaths.p33d59a80} id="Ellipse 3" stroke="var(--stroke-0, #56AA3E)" />
          <path d={svgPaths.p26e11580} id="Ellipse 4" stroke="var(--stroke-0, #56AA3E)" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-[calc(41.67%+104px)] px-[222px] py-[335px] top-[3281px] w-[856px]">
      <Frame51 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.3420201539993286)+(var(--transform-inner-height)*0.9396926164627075)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.3420201539993286)+(var(--transform-inner-width)*0.9396926164627075)))]" style={{ "--transform-inner-width": "684.734375", "--transform-inner-height": "626.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[340deg]">
          <Group14 />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[48px] top-[3281px]">
      <Frame50 />
      <Frame52 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[48px] top-[2679px]">
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-1/2 top-[2641px] translate-x-[-50%]">
      <Frame14 />
      <Group8 />
      <p className="absolute font-['Afacad:Regular',sans-serif] font-normal h-[43px] leading-[44px] left-1/2 text-[24px] text-center text-neutral-50 top-[4004px] translate-x-[-50%] w-[1280px]">{`We can't wait to receive and engage with you right here in the heart of Tallinn’s innovation scene.`}</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-0 top-[2325px]">
      <div className="absolute flex h-[1778px] items-center justify-center left-0 top-[2325px] w-[1728px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[1778px] relative w-[1728px]">
            <div className="absolute bottom-[5.02%] left-0 right-0 top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1728 1689">
                <path d={svgPaths.p5bf3e00} fill="var(--fill-0, black)" id="Rectangle 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group9 />
    </div>
  );
}

export default function AboutGetABoothPage() {
  return (
    <div className="bg-white relative w-[1728px] h-[6500px]" data-name="About - Get a Booth page">
      {/* <Frame5 /> - Header removed, using shared Navigation */}
      {/* <Footer /> - Footer removed, using shared Footer */}
      <Frame18 />
      <Group11 />
      <div className="absolute flex items-center justify-center left-1/2 top-[4199px] translate-x-[-50%] w-[1488px]">
        <div className="flex-none rotate-[180deg]">
          <Frame38 />
        </div>
      </div>
      <Group3 />
      <Group1 />
      <Group2 />
      <Group />
      <Group10 />
    </div>
  );
}