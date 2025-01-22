import React from 'react'

interface Statistic {
  value: string
  description: string
}

interface StatsSectionProps {
  description: string
  statistics: Statistic[]
}

const StatsSection = ({
  description,
  statistics
}: StatsSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-black py-20 max-w-7xl mx-auto mb-6 p-4">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1.5fr,1px,1fr,1px,1fr] lg:items-start lg:gap-12">
          {/* Main description */}
          <div className="max-w-2xl text-lg text-white/90 lg:text-xl">
            {description}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-customTeal h-full" />

          {/* Statistics */}
          {statistics.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col space-y-2">
                <div className="text-6xl font-normal text-white lg:text-6xl">
                  {stat.value}
                </div>
                <div className="text-lg text-white/90">
                  {stat.description}
                </div>
              </div>
              {index === 0 && (
                <div className="hidden lg:block w-px bg-customTeal h-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Decorative pattern */}
      {/* <div className="absolute bottom-0 right-0 h-32 w-32">
            <div className="relative h-full w-full">
              <div className="absolute bottom-0 right-0 h-full w-full" />
                <div className="absolute bottom-0 right-0 h-full w-full">
                    <Image
                    src="/Vector.svg"
                    alt="Blue Lines"
                    width={400}
                    height={300}
                    />
                </div>
            </div>
          </div> */}
    </section>
  )
}

export default StatsSection
