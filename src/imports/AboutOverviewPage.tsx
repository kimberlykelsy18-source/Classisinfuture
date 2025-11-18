import imgFrame96 from "figma:asset/9e19db1410ad54c763cde7258cb30e6259592838.png";
import imgFrame97 from "figma:asset/c242b15cba2281a76fa5e05b4522b3ee2e864704.png";
import imgFrame98 from "figma:asset/cd9a7169cbc80ef3a7d39d6082769457a3990f0c.png";
import imgFrame99 from "figma:asset/f971fc3dc319970b218220b3b0540c3cb2e9b2f3.png";
import imgFrame100 from "figma:asset/8752076381f930405c2797b2601b872e10ffcc2d.png";
import imgFrame101 from "figma:asset/b02a2578dd40fe6ec9433f582a41cb3474bbea2a.png";
import imgFrame102 from "figma:asset/49e306aa9b91721d8fb778b4c22b1914ea7b0475.png";
import imgFrame103 from "figma:asset/7a75cc4c3315cbb05a841da7e47815dbf56c88d2.png";
import imgFrame197 from "figma:asset/d4b45a1d6708d1b73301ef5cea0dfb20ef63cf87.png";
import imgInFuture from "figma:asset/c1870cae252e05893b6553304a75350e72f5eb5b.png";
import imgInFuture1 from "figma:asset/e8cf31e8f1788e1f73b154fac10c818ad4ca7da0.png";
import imgClassIs from "figma:asset/452e1b03a71d7aa5b0289f0be6ae8e90205720e5.png";
import imgClassIs1 from "figma:asset/df3dcc5f10bf27c9900ef103544d15e7fd79a44f.png";
import imgFrame198 from "figma:asset/a9b39af3278f2b0b96e0bcaf41ba224036dc8645.png";
import imgFrame199 from "figma:asset/ccfb970bb724de7806fb2cc8a9e3e6441fcc12fe.png";
import imgFrame200 from "figma:asset/7f772569eb66c0149573a0dfb67bfd81de028e45.png";

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

function Frame14() {
  return (
    <div className="content-stretch flex gap-[232px] items-start relative shrink-0 w-full">
      <TextAndSupportingText />
      <EmailCapture />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
      <Frame14 />
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

function Frame18() {
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

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 w-full">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#d5d7da] text-[16px] text-nowrap whitespace-pre">© 2026 Class is in Future. All rights reserved.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div className="bg-[#e9eaeb] h-px shrink-0 w-full" data-name="Divider" />
      <Frame16 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[160px] top-[64px] w-[1408px]">
      <Frame15 />
      <Frame18 />
      <Frame17 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black h-[711px] left-0 top-[5493px] w-[1728px]" data-name="Footer">
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[660px] items-center relative shrink-0 text-center w-full">
      <p className="font-['Afacad:SemiBold',sans-serif] font-semibold leading-[44px] min-w-full relative shrink-0 text-[40px] text-black w-[min-content]">Big events drown you in noise, endless slides, and polite applause. Class is in Future is different, leaner, bolder, and unapologetically focused on the people shaping classrooms of tomorrow. No fluff. No filler. Just the visionaries, makers, and risk-takers who actually matter.</p>
      <div className="basis-0 font-['Afacad:Regular',sans-serif] font-normal grow leading-[44px] min-h-px min-w-px relative shrink-0 text-[#252b37] text-[32px] w-[1320px]">
        <p className="mb-[24px]">Class is in Future is more than a conference, it is a global stage where education meets innovation. From Tallinn to the world, we bring together educators, founders, investors, and technologists from six continents to reimagine how learning happens.</p>
        <p className="mb-[24px]">In an age where AI tutors, immersive reality, and robotics are rewriting the rules of classrooms, this gathering is where vision turns into momentum. It’s a place to share bold ideas, spark collaborations, and showcase solutions that will shape how future generations learn.</p>
        <p>Whether you’re building the next big EdTech startup, scaling impact as an investor, trying to learn more about novel education strategies, or reshaping policy in education, Class is in Future is your gateway to the conversations and the community defining Education 2040 and beyond.</p>
      </div>
    </div>
  );
}

function ButtonBase28() {
  return (
    <div className="bg-[#6923d2] h-[80px] relative rounded-[8px] shrink-0 w-[400px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[80px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[400px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Get Tickets</p>
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

function Frame33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-center left-[195px] top-[1213px] w-[1339px]">
      <Frame20 />
      <Button28 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex font-['Afacad:Regular',sans-serif] font-normal gap-[40px] items-center justify-center leading-[32px] left-1/2 text-[32px] text-center top-[108px] translate-x-[-50%]">
      <p className="relative shrink-0 text-[#ff70a0] w-[233px]">Tallinn, Estonia</p>
      <p className="relative shrink-0 text-[#a273e8] w-[215px]">August 2026</p>
      <p className="relative shrink-0 text-[#df9290] w-[284px]">1,000+ attendees expected</p>
      <p className="relative shrink-0 text-[#72c35b] w-[202px]">6 continents represented</p>
      <p className="relative shrink-0 text-[#80a0ef] w-[215px]">50+ speakers</p>
      <p className="relative shrink-0 text-[#ff70a0] w-[217px]">30+ startups on display</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-black h-[280px] left-0 overflow-clip top-[2097px] w-[1728px]">
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-center w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] min-w-full relative shrink-0 text-[56px] text-black tracking-[-1.12px] w-[min-content]">
        <span>{`Class is in `}</span>Future<span>{` Team`}</span>
      </p>
      <div className="font-['Afacad:Regular',sans-serif] font-normal h-[199px] relative shrink-0 text-[#252b37] text-[32px] w-[1320px]">
        <p className="leading-[44px] mb-[24px]">Class is in Future is powered by a diverse team of educators, designers, technologists, and community builders who believe that the future of learning must be co-created. We believe in questioning how learning works, amplifying voices that spark change, cutting through jargon, and keeping curiosity alive.</p>
        <p className="leading-[44px]">
          <span>{`Together, we call this the `}</span>
          <span className="font-['Afacad:SemiBold',sans-serif] font-semibold text-[#6941c6]">Future Class Energy</span>.
        </p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="aspect-[316/316] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame96} />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "156", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[156px]">Ebube@tutlee.com</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "166", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[166px]">{`Head, Follow-Up & Partnerships`}</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "143", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[32px] leading-[32px] relative text-[32px] text-center text-white w-[143px]">Ebube Dike</p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-black h-[316px] relative rounded-[16px] w-[176px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[316px]">
      <Frame6 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "176", "--transform-inner-height": "316" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Card />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="aspect-[316/316] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame97} />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "156", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[156px]">Daniel@tutlee.com</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "166", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[166px]">{`Operations & Logistics`}</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "163", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[32px] leading-[32px] relative text-[32px] text-center text-white w-[163px]">Daniel Liigus</p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-black h-[316px] relative rounded-[16px] w-[176px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame38 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[316px]">
      <Frame8 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "176", "--transform-inner-height": "316" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Card1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="aspect-[316/316] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame98} />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "167", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal h-[20px] leading-[24px] relative text-[20px] text-center text-white w-[167px]">Flourish@tutlee.com</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "166", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[166px]">{`Program Content & Distribution`}</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "178", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[32px] leading-[32px] relative text-[32px] text-center text-white w-[178px]">Flourish Ralph</p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-black h-[316px] relative rounded-[16px] w-[176px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame39 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[316px]">
      <Frame9 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "176", "--transform-inner-height": "316" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Card2 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="aspect-[316/316] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame99} />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "177", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal h-[20px] leading-[24px] relative text-[20px] text-center text-white w-[177px]">Kimberly@tutlee.com</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "166", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[166px]">{`Operations & Logistics`}</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "186", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[32px] leading-[32px] relative text-[32px] text-center text-white w-[186px]">Kimberly Kelsy</p>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-black h-[316px] relative rounded-[16px] w-[176px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame40 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[316px]">
      <Frame10 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "176", "--transform-inner-height": "316" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Card3 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[75px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[316px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame100} />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "179", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal h-[20px] leading-[24px] relative text-[20px] text-center text-white w-[179px]">Rebecca@tutlee.com</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "166", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[166px]">{`Lead, Follow-Up & Partnerships`}</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "208", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[32px] leading-[32px] relative text-[32px] text-center text-white w-[208px]">Rebecca Davies</p>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-black h-[316px] relative rounded-[16px] w-[176px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[316px]">
      <Frame7 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "176", "--transform-inner-height": "316" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Card4 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="aspect-[316/316] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame101} />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "161", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal h-[20px] leading-[24px] relative text-[20px] text-center text-white w-[161px]">Victory@tutlee.com</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "166", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[166px]">{`Marketing & Community`}</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "184", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[32px] leading-[32px] relative text-[32px] text-center text-white w-[184px]">Victory Nwaka</p>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-black h-[316px] relative rounded-[16px] w-[176px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[316px]">
      <Frame11 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "176", "--transform-inner-height": "316" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Card5 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[316px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame102} />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "177", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal h-[20px] leading-[24px] relative text-[20px] text-center text-white w-[177px]">Ed@tutlee.com</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "166", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[166px]">Startup Relations</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "186", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[32px] leading-[32px] relative text-[32px] text-center text-white w-[186px]">Ed Sheeran</p>
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-black h-[316px] relative rounded-[16px] w-[176px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[316px]">
      <Frame12 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "176", "--transform-inner-height": "316" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Card6 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[316px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame103} />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "167", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal h-[20px] leading-[24px] relative text-[20px] text-center text-white w-[167px]">Taylor@tutlee.com</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "166", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[166px]">Volunteers</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "178", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[32px] leading-[32px] relative text-[32px] text-center text-white w-[178px]">Taylor Swift</p>
        </div>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-black h-[316px] relative rounded-[16px] w-[176px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#a4a7ae] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[316px]">
      <Frame13 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "176", "--transform-inner-height": "316" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Card7 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[75px] items-center relative shrink-0 w-full">
      <Frame43 />
      <Frame48 />
      <Frame50 />
      <Frame52 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[75px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[72px] items-start left-[120px] top-[3897px] w-[1488px]">
      <Frame23 />
      <Frame31 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[32px] top-[15px] w-[1664px]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "963", "--transform-inner-height": "138" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[138px] leading-[90px] relative text-[288px] text-white tracking-[-5.76px] w-[963px]">CLASS IS</p>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "967", "--transform-inner-height": "117" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="font-['Afacad:Medium',sans-serif] font-medium h-[117px] leading-[90px] relative text-[240px] text-white tracking-[-4.8px] w-[967px]">IN FUTURE</p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute h-[997px] left-0 overflow-clip top-[120px] w-[1728px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame197} />
      </div>
      <Frame41 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Afacad:Medium',sans-serif] font-medium leading-[90px] left-1/2 text-[200px] top-[calc(50%+587.5px)] tracking-[-4px] translate-x-[-50%] translate-y-[-50%]">
      <p className="absolute bg-center bg-clip-text bg-cover bg-no-repeat h-[107px] left-[calc(79.17%-488px)] top-[calc(50%+588px)] w-[800px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${imgInFuture}')` }}>
        IN FUTURE
      </p>
      <p className="absolute bg-center bg-clip-text bg-cover bg-no-repeat h-[107px] left-[calc(20.83%+472px)] text-right top-[calc(50%+592px)] translate-x-[-100%] w-[800px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${imgInFuture1}')` }}>
        IN FUTURE
      </p>
      <p className="absolute bg-center bg-clip-text bg-cover bg-no-repeat h-[107px] left-[calc(83.33%-408px)] top-[calc(50%+480px)] w-[664px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${imgClassIs}')` }}>
        CLASS IS
      </p>
      <p className="absolute bg-center bg-clip-text bg-cover bg-no-repeat h-[107px] left-[calc(20.83%-312px)] top-[calc(50%+476px)] w-[691px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${imgClassIs1}')` }}>
        CLASS IS
      </p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] relative shrink-0 text-[56px] text-black tracking-[-1.12px] w-[1488px]">Why Estonia? Why Now?</p>
      <div className="font-['Afacad:Regular',sans-serif] font-normal h-[199px] leading-[44px] relative shrink-0 text-[#252b37] text-[32px] w-[1320px]">
        <p className="mb-[24px]">The first edition of Class is in Future takes place in Tallinn, Estonia, a city globally recognized for its digital innovation and education-first approach. Estonia sets the perfect stage for launching this global movement, but the mission reaches far beyond one location.</p>
        <p>Today, Tallinn. Tomorrow, the world.</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[640px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame198} />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[316px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[177.72%] left-0 max-w-none top-[-9.05%] w-full" src={imgFrame199} />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[316px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-black inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame200} />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[840px]">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame35 />
      <Frame44 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[72px] items-start left-[120px] top-[2473px] w-[1488px]">
      <Frame53 />
      <Frame45 />
    </div>
  );
}

export default function AboutOverviewPage() {
  return (
    <div className="bg-white relative w-full h-[5500px]" data-name="About - Overview page">
      {/* <Frame5 /> - Header removed, using shared Navigation */}
      {/* <Footer /> - Footer removed, using shared Footer */}
      <Frame33 />
      <Frame21 />
      <Frame32 />
      <Frame34 />
      <Group />
      <Frame46 />
    </div>
  );
}