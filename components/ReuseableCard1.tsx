import MultiStepsRectangles from "@/components/createAccountApp/multi-step-rectangles"



interface ChildComponentProps{
  HeaderComponent:React.FC<{mainText?:string;secondText?:string}>,
  component:React.FC,
  mainText?:string,
  secondText?:string,
  isEmail?:boolean,
  isMultistep?:boolean,
}

const ReusableCard1:React.FC<ChildComponentProps> = ({
  HeaderComponent:HeaderComponent,
  component:Component,
  mainText,
  secondText,
  isEmail,
  isMultistep=true

}) => {
  return (
    <>

   <div className="rounded-lg  border sm:py-auto
          w-full mx-4  md:w-10/12 lg:w-3/4
          pt-5 pb-2 px-0 sm:px-auto 
           border-secondary-color-theme">
      <div className="mx-4 sm:mx-8 text-center ">
      <HeaderComponent mainText={mainText} secondText={secondText}  />
      {isMultistep?<MultiStepsRectangles />:null}
      <Component  />
      </div>
 </div>
 
 
 </>

  )
}

export default ReusableCard1
