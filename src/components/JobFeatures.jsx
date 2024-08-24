import { useRouter } from "next/navigation";

const JobFeature = ({ formValues }) => {
  //   await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("hi");
  //     }, 3000);
  //   });
  const router = useRouter();

  const editHandler = ()=>{
    router.push("/edit");
  }

  return (
    <div>
      <div className="mt-4 md:max-w-xl mx-auto dark:bg-slate-500 bg-slate-100 rounded-md shadow-md  dark:shadow-slate-300 overflow-hidden border-1 border-slate-800">
        <h1 className="shadow-md  bg-violet-100 dark:bg-slate-700 px-8 py-2 text-center dark:text-white text-slate-700 text-sm">
          اطلاعات ثبت شده
        </h1>
        <div className="w-full">
          <div className="grid grid-cols-1 gap-y-4 mx-8  text-slate-600  dark:bg-slate-500 dark:text-white py-2 text-sm font-bold">
            <div className="personalFeatures gap-y-2 p-2 border border-dotted border-slate-400 rounded-md">
              <h1 className="mb-4 text-sm font-bold">مشخصات فردی</h1>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label> نام و نام خانوادگی: </label>
                  {formValues.fullname}
                </div>
                <div>
                  <label>ایمیل: </label>
                  {formValues.email}
                </div>
              </div>
            </div>
            <div className="jobFeatures gap-y-2 p-2 border border-dotted border-slate-400 rounded-md">
              <h1 className="mb-4 text-sm font-bold">مشخصات شغلی</h1>
              <div className="grid grid-cols-1 gap-4 ">
                <div>
                  <label>عنوان شغل: </label>
                  {formValues.jobrole}
                </div>
                <div>
                  <label>سابقه کار: </label>
                  {formValues.experience}
                </div>
                <div>
                  <label>مهارت ها: </label>
                  {formValues.Skills.map((v, index) => " - " + v)}
                </div>
              </div>
            </div>
            <div className="Description gap-y-2 p-2 border border-dotted border-slate-400 rounded-md">
              <h1 className="mb-4 text-sm font-bold"> توضیحات</h1>
              <div className="grid grid-cols-1 gap-4 ">
                <div>{formValues.additionalinformation}</div>
              </div>
            </div>
          </div>
          <div className="mx-8">
            <button onClick={editHandler} className="w-full p-2 my-6 rounded bg-violet-700 dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-violet-600 text-white font-bold">
              ویرایش اطلاعات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFeature;
