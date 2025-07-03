export const BlogSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto border-b border-gray-200 pb-3 pt-2 p-3 animate-pulse">
      <div className="flex items-center">
        <div className="flex justify-center flex-col">
          <div className="w-7 h-7 rounded-full bg-gray-300" />
        </div>

        <div className="pl-2 text-sm flex justify-center flex-col">
          <div className="w-20 h-3 bg-gray-300 rounded" />
        </div>

        <div className="flex justify-center flex-col pl-1 pr-1">
          <div className="rounded-full bg-gray-400 w-1 h-1" />
        </div>

        <div className="flex justify-center flex-col text-sm">
          <div className="w-16 h-3 bg-gray-300 rounded" />
        </div>
      </div>

      <div className="font-bold text-xl pt-3">
        <div className="w-2/3 h-5 bg-gray-300 rounded" />
      </div>

      <div className="text-md pt-1.5 space-y-1.5">
        <div className="w-full h-3 bg-gray-200 rounded" />
        <div className="w-5/6 h-3 bg-gray-200 rounded" />
        <div className="w-4/6 h-3 bg-gray-200 rounded" />
      </div>

      <div className="font-thin text-sm pt-3">
        <div className="w-28 h-3 bg-gray-300 rounded" />
      </div>
    </div>
  );
};


export const FullBlogSkeleton = () => {
  return (
    <div>

      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-10 max-w-screen-2xl pt-12 animate-pulse gap-6">
          
          <div className="col-span-8 space-y-6">
            <div className="h-12 w-3/4 bg-gray-300 rounded" /> 
            <div className="h-4 w-40 bg-gray-200 rounded" /> 
            <div className="space-y-3 pt-2">
         
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
              <div className="h-4 w-1/2 bg-gray-200 rounded" />
            </div>
          </div>

          <div className="col-span-4 space-y-4">
            <div className="h-5 w-20 bg-gray-300 rounded" /> 
            
            <div className="flex pt-3">
              <div className="flex justify-center flex-col pr-3">
                <div className="w-10 h-10 rounded-full bg-gray-300" /> 
              </div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-300 rounded" /> 
                <div className="h-4 w-48 bg-gray-200 rounded" /> 
                <div className="h-4 w-40 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
