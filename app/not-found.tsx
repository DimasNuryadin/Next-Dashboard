import Button from "@/components/atoms/Button";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[60vh] mt-16">
        <h1 className="text-7xl font-semibold">404</h1>
        <p className="text-base pt-11 pb-7 w-120 text-center">
          {"The Page You're Looking for Can't be Found. It's Looks Like You're Trying to Access a Page That Either Has Been Deleted or Never Existed..."}
        </p>
        <Button tittle="Go Back" link="/" />
      </div>
    </div>
  )
}
