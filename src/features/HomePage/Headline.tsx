import siteMetadata from '@/data/siteMetadata'

export const Headline = () => {
  return (
    <div className="space-y-2 pb-4 pt-6 md:space-y-5">
      <div className="grid grid-cols-1 items-center justify-items-end gap-4 sm:grid-cols-2 sm:grid-rows-1 ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
      </div>
    </div>
  )
}
