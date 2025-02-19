import HighlightText from './HighlightText'
import know_your_progress from "../../Assetss/Images/Know_your_progress.png"
import compare_with_others from "../../Assetss/Images/Compare_with_others.png"
import plan_your_lesson from "../../Assetss/Images/Plan_your_lessons.png"

const LearningLanguageSection = () => {
  return (
    <div className="mt-[20px]  mb-0 relative">
      {/* Background Gradient */}
      <div className="absolute grad -bottom-48 -left-40 w-96 h-96 rounded-full bg-gradient-radial from-[#a32b93] via-[#b6b5c5] to-transparent opacity-30 blur-3xl"></div>

      <div className="flex flex-col items-center gap-5 px-5 lg:px-0">
        {/* Heading */}
        <div className="text-2xl font-semibold text-center sm:text-3xl lg:text-4xl">
          Your Swiss Knife for
          <HighlightText text={" learning any language"} />
        </div>

        {/* Description */}
        <div className="text-center text-richblack-600 mx-auto text-sm sm:text-base font-medium w-full sm:w-[80%] lg:w-[70%]">
          Using spin making learning multiple languages easy. With 20+ languages, realistic voice-over, progress tracking, custom schedule, and more.
        </div>

        {/* Second Background Gradient */}
        <div className="absolute overflow-x-hidden left-96 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-radial from-[#a32b93] via-[#b6b5c5] to-transparent opacity-30 blur-3xl"></div>

        {/* Images Section */}
        <div className="z-50 flex flex-wrap items-center justify-center w-full mt-5 lg:flex-nowrap">
          <img
            src={know_your_progress}
            alt="KnowYourProgressImage"
            className="object-contain w-[80%] sm:w-[50%] lg:w-[30%]"
          />
          <img
            src={compare_with_others}
            alt="CompareWithOthersImage"
            className="object-contain w-[80%] sm:w-[50%] lg:w-[30%]"
          />
          <img
            src={plan_your_lesson}
            alt="PlanYourLessonImage"
            className="object-contain w-[80%] sm:w-[50%] lg:w-[30%]"
          />
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection
