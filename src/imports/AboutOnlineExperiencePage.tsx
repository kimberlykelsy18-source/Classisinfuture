import svgPaths from "./svg-5meu9akl1v";
import imgTeamMember from "figma:asset/2e3c1f539a79a8861fa5583dc9b12980f2306b5d.png";
import imgTeamMember1 from "figma:asset/57d781e8b9fa61e261dc0fc9271b6a58940073b7.png";
import imgTeamMember2 from "figma:asset/e2fc3059463cfbd7f47799daca792469a64af38e.png";
import imgTeamMember3 from "figma:asset/58fbaceb215656a201e22dca66077eb395788d91.png";
import imgPaper16 from "figma:asset/8d68b68076f43fe952040d88e7b094d513b71efb.png";

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

function Frame13() {
  return (
    <div className="content-stretch flex gap-[232px] items-start relative shrink-0 w-full">
      <TextAndSupportingText />
      <EmailCapture />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
      <Frame13 />
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

function Frame17() {
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

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 w-full">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#d5d7da] text-[16px] text-nowrap whitespace-pre">© 2026 Class is in Future. All rights reserved.</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div className="bg-[#e9eaeb] h-px shrink-0 w-full" data-name="Divider" />
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[160px] top-[64px] w-[1408px]">
      <Frame14 />
      <Frame17 />
      <Frame16 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black h-[711px] left-1/2 top-[4409px] translate-x-[-50%] w-[1728px]" data-name="Footer">
      <Frame18 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#56aa3e] box-border content-stretch flex gap-[10px] h-[64px] items-center justify-center overflow-clip relative rounded-[8px] shadow-[1px_1px_11.2px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <p className="font-['Handlee:Regular',sans-serif] h-[32px] leading-[normal] not-italic relative shrink-0 text-[32px] text-center text-white w-[235px]">Online Experience</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[231px] top-[118px] w-[272px]">
      <Frame6 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.6515255570411682)+(var(--transform-inner-height)*0.7586266398429871)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.6515255570411682)+(var(--transform-inner-width)*0.7586266398429871)))]" style={{ "--transform-inner-width": "77.53125", "--transform-inner-height": "45.109375" } as React.CSSProperties}>
        <div className="flex-none rotate-[220.657deg]">
          <div className="h-[45.122px] relative w-[77.54px]" data-name="arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 46">
              <path clipRule="evenodd" d={svgPaths.p277f5280} fill="var(--fill-0, white)" fillRule="evenodd" id="arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[386px] items-start left-[993px] top-[-7px] w-[14px]">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <div className="bg-white h-[14px] relative w-full">
            <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <div className="bg-white h-[14px] relative w-full">
            <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[386px] items-start left-[-7px] top-[-7px] w-[14px]">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <div className="bg-white h-[14px] relative w-full">
            <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <div className="bg-white h-[14px] relative w-full">
            <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[calc(50%+0.5px)] text-center top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[783px]">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">Class is in Future; Anywhere You Are.</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[175px] leading-[44px] relative shrink-0 text-[#535862] text-[28px] w-full">
        Can’t make it to Tallinn? Experience the future of classrooms online.
        <br aria-hidden="true" />
        {` Stream the keynotes, join live Q&A sessions, network with global attendees, and be part of the conversation shaping tomorrow’s EdTech landscape, all from your screen.`}
      </p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white h-[400px] left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[1000px]" data-name="navbar">
      <div aria-hidden="true" className="absolute border-[5px] border-black border-solid inset-0 pointer-events-none shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]" />
      <Frame22 />
      <Frame23 />
      <Frame21 />
    </div>
  );
}

function Cursor() {
  return (
    <div className="absolute inset-[92.88%_98.47%_4.88%_0.23%]" data-name="Cursor">
      <div className="absolute bottom-[-21.32%] left-0 right-[-16.48%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 28">
          <g id="Cursor">
            <g filter="url(#filter0_d_1_24983)" id="Cursor_2">
              <path d={svgPaths.p2898e600} fill="var(--fill-0, #F072CD)" />
              <path d={svgPaths.p2898e600} stroke="var(--stroke-0, #0F0F0F)" strokeWidth="1.11882" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.8081" id="filter0_d_1_24983" width="22.7926" x="3.27246" y="2.33904">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.11882" />
              <feGaussianBlur stdDeviation="1.11882" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_24983" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_24983" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Comment() {
  return (
    <div className="absolute bg-[#f072cd] box-border content-stretch flex gap-[8.951px] inset-[95.09%_87.96%_0.4%_1.39%] items-start pl-[17.901px] pr-[22.376px] py-[8.951px] rounded-bl-[26.852px] rounded-br-[26.852px] rounded-tl-[2.238px] rounded-tr-[26.852px]" data-name="Comment">
      <div aria-hidden="true" className="absolute border-[#db4a90] border-[2.238px] border-solid inset-0 pointer-events-none rounded-bl-[26.852px] rounded-br-[26.852px] rounded-tl-[2.238px] rounded-tr-[26.852px] shadow-[4.475px_4.475px_11.188px_0px_rgba(247,144,9,0.16)]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[27px] leading-[27px] not-italic relative shrink-0 text-[18px] text-white w-[148px]">Class is in Future</p>
    </div>
  );
}

function CommentCursor() {
  return (
    <div className="absolute contents inset-[92.88%_87.96%_0.4%_0.23%]" data-name="Comment cursor">
      <Cursor />
      <Comment />
    </div>
  );
}

function Cursor1() {
  return (
    <div className="absolute bottom-[97.76%] left-[87.96%] right-[10.74%] top-0" data-name="Cursor">
      <div className="absolute bottom-[-21.32%] left-0 right-[-16.48%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 28">
          <g id="Cursor">
            <g filter="url(#filter0_d_1_24983)" id="Cursor_2">
              <path d={svgPaths.p2898e600} fill="var(--fill-0, #F072CD)" />
              <path d={svgPaths.p2898e600} stroke="var(--stroke-0, #0F0F0F)" strokeWidth="1.11882" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.8081" id="filter0_d_1_24983" width="22.7926" x="3.27246" y="2.33904">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.11882" />
              <feGaussianBlur stdDeviation="1.11882" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_24983" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_24983" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Comment1() {
  return (
    <div className="absolute bg-[#f072cd] box-border content-stretch flex gap-[8.951px] inset-[2.21%_0.23%_93.28%_89.12%] items-start pl-[17.901px] pr-[22.376px] py-[8.951px] rounded-bl-[26.852px] rounded-br-[26.852px] rounded-tl-[2.238px] rounded-tr-[26.852px]" data-name="Comment">
      <div aria-hidden="true" className="absolute border-[#db4a90] border-[2.238px] border-solid inset-0 pointer-events-none rounded-bl-[26.852px] rounded-br-[26.852px] rounded-tl-[2.238px] rounded-tr-[26.852px] shadow-[4.475px_4.475px_11.188px_0px_rgba(247,144,9,0.16)]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[27px] leading-[27px] not-italic relative shrink-0 text-[18px] text-white w-[148px]">Class is in Future</p>
    </div>
  );
}

function CommentCursor1() {
  return (
    <div className="absolute bottom-[93.28%] contents left-[87.96%] right-[0.23%] top-0" data-name="Comment cursor">
      <Cursor1 />
      <Comment1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 contents left-[-3.7%] right-[-3.7%] top-0">
      <div className="absolute bottom-[87.16%] flex items-center justify-center left-[-3.7%] right-[94.97%] top-0">
        <div className="flex-none h-[128px] scale-y-[-100%] w-[151px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute bottom-[-1.56%] left-0 right-0 top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 130">
                <g filter="url(#filter0_d_1_24986)" id="Vector">
                  <path d={svgPaths.p29a107f0} fill="#CBB1F2" />
                  <path d={svgPaths.pb302d00} stroke="var(--stroke-0, black)" strokeWidth="2" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="130" id="filter0_d_1_24986" width="151" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.745098 0 0 0 0 0.74902 0 0 0 0 0.705882 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_24986" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_24986" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center left-[94.97%] right-[-3.7%] top-[87.16%]">
        <div className="flex-none h-[128px] scale-y-[-100%] w-[151px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute bottom-[-1.56%] left-0 right-0 top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 130">
                <g filter="url(#filter0_d_1_24978)" id="Vector">
                  <path d={svgPaths.pde93800} fill="var(--fill-0, #A4BBF4)" />
                  <path d={svgPaths.pdb21530} stroke="var(--stroke-0, black)" strokeWidth="2" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="130" id="filter0_d_1_24978" width="151" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.745098 0 0 0 0 0.74902 0 0 0 0 0.705882 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_24978" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_24978" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <CommentCursor />
      <CommentCursor1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute bg-black h-[997px] left-0 overflow-clip top-[120px] w-[1728px]">
      <Frame20 />
      <Navbar />
      <Group />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[229px] items-center relative shrink-0 text-center w-full">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] min-w-full relative shrink-0 text-[56px] text-black tracking-[-1.12px] w-[min-content]">What You’ll Get To Enjoy</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[131px] leading-[44px] relative shrink-0 text-[#252b37] text-[32px] w-[1170px]">Your front-row seat to the future, wherever you are. Experience the same energy, insights, and opportunities as our on-site guests through a seamless digital experience built for connection and discovery.</p>
    </div>
  );
}

function HeadingAndIcon() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and icon">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[38px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-white">{`Live & On-Demand Access`}</p>
    </div>
  );
}

function RoleAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-white w-full" data-name="Role and supporting text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] w-full">No matter where you are.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Tune in to every keynote, fireside chat, and startup pitch as it happens. Missed a session? Rewatch it anytime during the event week, all on your own schedule.</p>
    </div>
  );
}

function NameAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Name and supporting text">
      <HeadingAndIcon />
      <RoleAndSupportingText />
    </div>
  );
}

function AttributionCard() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
          <NameAndSupportingText />
        </div>
      </div>
    </div>
  );
}

function BottomPanel() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 box-border content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 pb-0 pt-[96px] px-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <div className="h-px relative shrink-0 w-full" data-name="Divider">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 819 1">
          <foreignObject height="49" width="867" x="-24" y="-24">
            <div style={{ backdropFilter: "blur(12px)", clipPath: "url(#bgblur_0_1_24976_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path clipRule="evenodd" d="M819 1H0V0H819V1Z" data-figma-bg-blur-radius="24" fill="var(--fill-0, white)" fillOpacity="0.5" fillRule="evenodd" id="Divider" />
          <defs>
            <clipPath id="bgblur_0_1_24976_clip_path" transform="translate(24 24)">
              <path clipRule="evenodd" d="M819 1H0V0H819V1Z" fillRule="evenodd" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <AttributionCard />
    </div>
  );
}

function TeamMember() {
  return (
    <div className="h-[744px] relative rounded-[8px] shrink-0 w-full" data-name="_Team member">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgTeamMember} />
      <BottomPanel />
    </div>
  );
}

function HeadingAndIcon1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and icon">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[38px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-white">Global Community Access</p>
    </div>
  );
}

function RoleAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-white w-full" data-name="Role and supporting text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] w-full">Break into the Class is in Future community.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Connect beyond the conference. Gain entry to our online community hub for ongoing discussions, shared resources, and future event updates.</p>
    </div>
  );
}

function NameAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Name and supporting text">
      <HeadingAndIcon1 />
      <RoleAndSupportingText1 />
    </div>
  );
}

function AttributionCard1() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
          <NameAndSupportingText1 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel1() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 box-border content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 pb-0 pt-[96px] px-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <div className="h-px relative shrink-0 w-full" data-name="Divider">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 819 1">
          <foreignObject height="49" width="867" x="-24" y="-24">
            <div style={{ backdropFilter: "blur(12px)", clipPath: "url(#bgblur_0_1_24976_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path clipRule="evenodd" d="M819 1H0V0H819V1Z" data-figma-bg-blur-radius="24" fill="var(--fill-0, white)" fillOpacity="0.5" fillRule="evenodd" id="Divider" />
          <defs>
            <clipPath id="bgblur_0_1_24976_clip_path" transform="translate(24 24)">
              <path clipRule="evenodd" d="M819 1H0V0H819V1Z" fillRule="evenodd" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <AttributionCard1 />
    </div>
  );
}

function TeamMember1() {
  return (
    <div className="h-[376px] relative rounded-[8px] shrink-0 w-full" data-name="_Team member">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[334.48%] left-0 max-w-none top-[-66.13%] w-full" src={imgTeamMember1} />
      </div>
      <BottomPanel1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[819px]">
      <TeamMember />
      <TeamMember1 />
    </div>
  );
}

function HeadingAndIcon2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and icon">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[38px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-white">Virtual Networking Lounges</p>
    </div>
  );
}

function RoleAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-white w-full" data-name="Role and supporting text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] w-full">Connect with people globally.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Exchange ideas with educators, founders, and investors from across six continents. Join themed chat rooms and video lounges designed to spark real conversations and collaborations.</p>
    </div>
  );
}

function NameAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Name and supporting text">
      <HeadingAndIcon2 />
      <RoleAndSupportingText2 />
    </div>
  );
}

function AttributionCard2() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
          <NameAndSupportingText2 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel2() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 box-border content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 pb-0 pt-[96px] px-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <div className="h-px relative shrink-0 w-full" data-name="Divider">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 661 1">
          <foreignObject height="49" width="709" x="-24" y="-24">
            <div style={{ backdropFilter: "blur(12px)", clipPath: "url(#bgblur_0_1_24992_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path clipRule="evenodd" d="M661 1H0V0H661V1Z" data-figma-bg-blur-radius="24" fill="var(--fill-0, white)" fillOpacity="0.5" fillRule="evenodd" id="Divider" />
          <defs>
            <clipPath id="bgblur_0_1_24992_clip_path" transform="translate(24 24)">
              <path clipRule="evenodd" d="M661 1H0V0H661V1Z" fillRule="evenodd" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <AttributionCard2 />
    </div>
  );
}

function TeamMember2() {
  return (
    <div className="h-[560px] relative rounded-[8px] shrink-0 w-full" data-name="_Team member">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-12.66%] max-w-none top-[-8.15%] w-[125.31%]" src={imgTeamMember2} />
      </div>
      <BottomPanel2 />
    </div>
  );
}

function HeadingAndIcon3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and icon">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[38px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-white">Digital Expo Hall</p>
    </div>
  );
}

function RoleAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-white w-full" data-name="Role and supporting text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] w-full">Check out exhibitions.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Explore an interactive showcase of EdTech startups, institutions, and partners. Chat directly with exhibitors, watch live demos, and discover innovations redefining learning.</p>
    </div>
  );
}

function NameAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Name and supporting text">
      <HeadingAndIcon3 />
      <RoleAndSupportingText3 />
    </div>
  );
}

function AttributionCard3() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
          <NameAndSupportingText3 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel3() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 box-border content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 pb-0 pt-[96px] px-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <div className="h-px relative shrink-0 w-full" data-name="Divider">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 661 1">
          <foreignObject height="49" width="709" x="-24" y="-24">
            <div style={{ backdropFilter: "blur(12px)", clipPath: "url(#bgblur_0_1_24992_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path clipRule="evenodd" d="M661 1H0V0H661V1Z" data-figma-bg-blur-radius="24" fill="var(--fill-0, white)" fillOpacity="0.5" fillRule="evenodd" id="Divider" />
          <defs>
            <clipPath id="bgblur_0_1_24992_clip_path" transform="translate(24 24)">
              <path clipRule="evenodd" d="M661 1H0V0H661V1Z" fillRule="evenodd" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <AttributionCard3 />
    </div>
  );
}

function TeamMember3() {
  return (
    <div className="h-[560px] relative rounded-[8px] shrink-0 w-full" data-name="_Team member">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgTeamMember3} />
      <BottomPanel3 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[661px]">
      <TeamMember2 />
      <TeamMember3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame24 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[72px] items-start left-[120px] top-[1213px] w-[1488px]">
      <Frame19 />
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[185px] items-center relative shrink-0 text-center w-[1488px]">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[90px] min-w-full relative shrink-0 text-[56px] text-black tracking-[-1.12px] w-[min-content]">How It Works</p>
      <p className="font-['Afacad:Regular',sans-serif] font-normal h-[87px] leading-[44px] relative shrink-0 text-[#252b37] text-[32px] w-[1170px]">Joining the future of learning has never been easier. Whether you’re across the street or across the world, here’s how to be part of Class Is in Future — Tallinn 2026.</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[7.856px] items-start leading-[normal] not-italic relative shrink-0 text-[#d6bbfb]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[32px] w-[364.132px]">Get Your Online Pass</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[23.567px] w-[338.014px]">Choose your ticket type, confirm your spot, and get instant access credentials to our digital platform.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[42.106px] items-start relative">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[57.468px] relative shrink-0 text-[#d6bbfb] text-[57.468px] text-center tracking-[-1.1494px] w-[153.931px]">Step 1.</p>
      <Frame28 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[11.696px] items-center justify-center ml-[286.06px] mt-[100.59px] overflow-clip relative shadow-[1.17px_1.17px_13.1px_0px_rgba(0,0,0,0.08)]">
      <p className="font-['Handlee:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7f3fdf] text-[37.427px] text-center text-nowrap whitespace-pre">Registration</p>
    </div>
  );
}

function UxDesign() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="UX DESIGN">
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.06975647807121277)+(var(--transform-inner-height)*0.9975641369819641)))] items-center justify-center ml-0 mt-0 relative w-[calc(1px*((var(--transform-inner-height)*0.06975647807121277)+(var(--transform-inner-width)*0.9975641369819641)))]" style={{ "--transform-inner-width": "441.703125", "--transform-inner-height": "528.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[356deg]">
          <div className="bg-black h-[528.659px] rounded-[9.357px] shadow-[5.848px_5.848px_23.392px_0px_rgba(255,230,140,0.13)] w-[441.723px]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.06975647807121277)+(var(--transform-inner-height)*0.9975640773773193)))] items-center justify-center ml-[48px] mt-[180.86px] relative w-[calc(1px*((var(--transform-inner-height)*0.06975647807121277)+(var(--transform-inner-width)*0.9975640773773193)))]" style={{ "--transform-inner-width": "364.125", "--transform-inner-height": "309.671875" } as React.CSSProperties}>
        <div className="flex-none rotate-[356deg]">
          <Frame9 />
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[7.856px] items-start leading-[normal] not-italic relative shrink-0 text-[#7f3fdf]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[32px] w-[364.132px]">Join the Live Stream</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[23.567px] w-[338.014px]">Log in from your laptop, tablet, or phone. Enjoy real-time broadcasts of keynotes, demos, and cultural moments straight from Tallinn’s Kultuurikatel.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[42.106px] items-start relative">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[57.468px] relative shrink-0 text-[#7f3fdf] text-[57.468px] text-center tracking-[-1.1494px] w-[153.931px]">Step 2.</p>
      <Frame32 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[grid-area:1_/_1] bg-[#7f3fdf] box-border content-stretch flex gap-[11.696px] items-center justify-center ml-[281.77px] mt-[4.22px] overflow-clip relative shadow-[1.17px_1.17px_13.1px_0px_rgba(0,0,0,0.08)]">
      <p className="font-['Handlee:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[37.427px] text-center text-nowrap text-white whitespace-pre">Activities</p>
    </div>
  );
}

function UiDesign() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="UI DESIGN">
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.09584575146436691)+(var(--transform-inner-height)*0.9953961968421936)))] items-center justify-center ml-0 mt-0 relative w-[calc(1px*((var(--transform-inner-height)*0.09584575146436691)+(var(--transform-inner-width)*0.9953961968421936)))]" style={{ "--transform-inner-width": "441.703125", "--transform-inner-height": "528.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.5deg]">
          <div className="bg-white h-[528.659px] rounded-[9.357px] shadow-[5.848px_5.848px_23.392px_0px_rgba(157,220,255,0.15)] w-[441.723px]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.09584575146436691)+(var(--transform-inner-height)*0.9953961968421936)))] items-center justify-center ml-[48.71px] mt-[156.05px] relative w-[calc(1px*((var(--transform-inner-height)*0.09584575146436691)+(var(--transform-inner-width)*0.9953961968421936)))]" style={{ "--transform-inner-width": "364.125", "--transform-inner-height": "336.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.5deg]">
          <Frame10 />
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[7.856px] items-start leading-[normal] not-italic relative shrink-0 text-white">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[32px] w-[364.132px]">{`Connect & Network`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[23.567px] w-[338.014px]">Use the chat and video features to meet speakers, startups, and fellow attendees. Join topic-based groups that match your professional focus.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[42.106px] items-start relative">
      <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[57.468px] relative shrink-0 text-[57.468px] text-center text-white tracking-[-1.1494px] w-[153.931px]">Step 3.</p>
      <Frame33 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[grid-area:1_/_1] bg-black box-border content-stretch flex gap-[11.696px] items-center justify-center ml-[335.64px] mt-[111.24px] overflow-clip relative shadow-[1.17px_1.17px_13.1px_0px_rgba(0,0,0,0.08)]">
      <p className="font-['Handlee:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d6bbfb] text-[37.427px] text-center text-nowrap whitespace-pre">Engagement</p>
    </div>
  );
}

function Nocode() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="NOCODE">
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.08715574443340302)+(var(--transform-inner-height)*0.9961947202682495)))] items-center justify-center ml-0 mt-0 relative w-[calc(1px*((var(--transform-inner-height)*0.08715574443340302)+(var(--transform-inner-width)*0.9961947202682495)))]" style={{ "--transform-inner-width": "441.703125", "--transform-inner-height": "528.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[355deg]">
          <div className="bg-[#7f3fdf] h-[528.659px] rounded-[9.357px] shadow-[5.848px_5.848px_23.392px_0px_rgba(255,201,240,0.13)] w-[441.723px]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.08715574443340302)+(var(--transform-inner-height)*0.9961947202682495)))] items-center justify-center ml-[48.12px] mt-[159.91px] relative w-[calc(1px*((var(--transform-inner-height)*0.08715574443340302)+(var(--transform-inner-width)*0.9961947202682495)))]" style={{ "--transform-inner-width": "364.125", "--transform-inner-height": "336.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[355deg]">
          <Frame8 />
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function ServicesCard() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex h-[570px] items-start ml-[120px] mt-[308px] relative w-[1488px]" data-name="SERVICES CARD">
      <UxDesign />
      <UiDesign />
      <Nocode />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center ml-0 mt-0 relative w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1222", "--transform-inner-height": "1728" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[1728px] relative w-[1222px]" data-name="Paper 16">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.23%] left-0 max-w-none top-0 w-full" src={imgPaper16} />
            </div>
          </div>
        </div>
      </div>
      <ServicesCard />
    </div>
  );
}

function ButtonBase28() {
  return (
    <div className="bg-[#6923d2] h-[80px] relative rounded-[8px] shrink-0 w-[400px]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] h-[80px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[400px]">
        <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Get your Online Ticket</p>
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

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 top-[2738px] w-[1728px]">
      <Frame27 />
      <Group1 />
      <Button28 />
    </div>
  );
}

export default function AboutOnlineExperiencePage() {
  return (
    <div className="bg-white relative w-[1728px] h-[6000px]" data-name="About - Online Experience page">
      {/* <Frame5 /> - Header removed, using shared Navigation */}
      {/* <Footer /> - Footer removed, using shared Footer */}
      <Frame31 />
      <Frame30 />
      <Frame29 />
    </div>
  );
}