import { Images } from "@/assets/images";
import { Ruler, Layers, Clock, Zap, Grid2X2 } from "lucide-react"
export default function OurSolutionServices() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our Solar Solutions
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Solar Power — Anytime and Anywhere!
          </p>
          <div className="w-20 h-1 bg-background2 mx-auto mt-5 rounded-full" />
        </div>



     <section className="w-full py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* Top Text */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      We make mobile solar containers easy to transport, install and use.
    </h2>
    <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
      Make the next step towards renewable energy with our Solarcontainer! 
      A fully mobile power solution designed for off-grid environments. 
      Built to be durable, sustainable, and plug-and-play ready.
    </p>
<div className="w-full h-[500px] mt-4">
  <img
    src={Images.solarcontainer}
    alt="solar container"
    className="w-full h-full object-cover object-center rounded-xl"
  />
</div>
    {/* Features Section */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Mobile Structure */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-3">Mobile Structure</h3>
        <p className="text-gray-600">
          The Solarcontainer has the measurements of a 20-foot "high-cube" 
          container according ISO 668 with CSC.
        </p>
      </div>

      {/* Easy Assembly */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-3">Easy Assembly</h3>
        <p className="text-gray-600">
          Durable and sustainable plug-and-play solution.
        </p>
      </div>

    </div>

  </div>
</section>




        {/* Divider */}
        <div className="w-full h-1 bg-gray-100 my-16 rounded-full"></div>



    
        {/* TECHNICAL HIGHLIGHTS */}
        <div className="text-center mt-20 mb-14">
          <h3 className="text-3xl font-bold">Technical Information & Capabilities</h3>
          <p className="text-gray-600 mt-2">
            Advanced mobile solar technology engineered for reliability.
          </p>
        </div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
  {/* Unfolded Length */}
  <div className="flex flex-col items-center p-4 min-h-[180px]">
    <Ruler className="w-12 h-12 text-primary mb-2" />
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">116m</p>
    <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-[150px] sm:max-w-[180px] md:max-w-[200px]">
      Unfolded panels length
    </p>
  </div>

  {/* PV Modules */}
  <div className="flex flex-col items-center p-4 min-h-[180px]">
    <Grid2X2 className="w-12 h-12 text-primary mb-2" />
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">240</p>
    <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-[150px] sm:max-w-[180px] md:max-w-[200px]">
      Number of PV modules
    </p>
  </div>

  {/* Surface Area */}
  <div className="flex flex-col items-center p-4 min-h-[180px]">
    <Layers className="w-12 h-12 text-primary mb-2" />
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">720m²</p>
    <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-[150px] sm:max-w-[180px] md:max-w-[200px]">
      Surface area coverage
    </p>
  </div>

  {/* Assembly Time */}
  <div className="flex flex-col items-center p-4 min-h-[180px]">
    <Clock className="w-12 h-12 text-primary mb-2" />
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">5h</p>
    <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-[150px] sm:max-w-[180px] md:max-w-[200px]">
      Up to 5 hours of assembly time
    </p>
  </div>

  {/* Power Output */}
  <div className="flex flex-col items-center p-4 min-h-[180px]">
    <Zap className="w-12 h-12 text-primary mb-2" />
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">140 kWp</p>
    <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-[150px] sm:max-w-[180px] md:max-w-[200px]">
      Up to power generating capability
    </p>
  </div>
</div>

      </div>


      <section className="py-16 bg-gray-50">
  {/* Section Heading */}
  <div className="text-center max-w-4xl mx-auto px-4 mb-12">
 <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
Commercial Energy Storage          </h2>
          <p className="text-lg text-gray-600 mt-3">
   Commercial & Industrial Battery Energy Storage System<br/>
      AMCC provides fully integrated Battery Energy Storage Systems (BESS) engineered to maximize performance and minimize costs for commercial and industrial applications requiring reliable grid continuity. Our battery storage solutions adapt to diverse needs, including peak shaving and valley filling, grid frequency regulation, microgrid stabilization, emergency backup power supply, etc.
             </p>
          <div className="w-20 h-1 bg-background2 mx-auto mt-5 rounded-full" />
        </div>




  </div>

  {/* Row 1: Left text, Right image */}
  <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 mb-16 gap-8">
    <div className="md:w-1/2">
      <h3 className="text-2xl font-semibold mb-4">Advanced LiFePO4 Energy Storage Solutions</h3>
      <p className="text-gray-700">
        Polinovel Commercial & Industrial Battery Energy Storage Systems feature LiFePO4 batteries at their core, offering superior safety and high efficiency. Crafted with premium components and built to the highest manufacturing standards, our battery storage systems ensure unparalleled performance and long-lasting durability.
      </p>
    </div>
    <div className="md:w-1/2">
      <img src={Images.energyStorage} alt="Advanced LiFePO4 Energy Storage" className="w-full rounded-lg shadow-lg"/>
    </div>
  </div>

  {/* Row 2: Left image, Right text */}
  <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 mb-16 gap-8">
    <div className="md:w-1/2">
      <img src={Images.energy3} alt="Flexible Energy Storage" className="w-full rounded-lg shadow-lg"/>
    </div>
    <div className="md:w-1/2">
      <h3 className="text-2xl font-semibold mb-4">Flexible and Scalable Energy Storage Solutions</h3>
      <p className="text-gray-700">
        Polinovel commercial battery storage systems are the turnkey solution for large-scale power needs. They consist of LiFePO4 battery units, Power Conversion System (PCS), Energy Management System (EMS), Static Transfer Switch (STS), high-voltage control box, DC/DC unit, air/liquid cooling system, and fire extinguishing system to maximize efficiency, reliability, and safety, providing unmatched performance for different energy storage requirements.
      </p>
    </div>
  </div>

  {/* Row 3: Left text, Right image */}
  <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 mb-16 gap-8">
    <div className="md:w-1/2">
      <h3 className="text-2xl font-semibold mb-4">Maximized Safety and Efficiency</h3>
      <p className="text-gray-700">
        Polinovel commercial battery storage systems offer exceptional safety and efficiency. The integrated PCS ensures optimal energy deployment and power control; the EMS continuously manages and optimizes energy use for peak performance; the STS enables rapid switching between on-grid and off-grid operation in less than 20 milliseconds, ensuring uninterrupted power supply.
        <br/><br/>
        The fire extinguishing system offers smoke detection and fire protection; the air/liquid cooling systems maintain optimal operating temperatures for enhanced system longevity. Together, these advanced components ensure safe and efficient energy management.
      </p>
    </div>
    <div className="md:w-1/2">
      <img src={Images.energy5} alt="Safety and Efficiency" className="w-full rounded-lg shadow-lg"/>
    </div>
  </div>

  {/* Row 4: Left image, Right text */}
  <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 mb-16 gap-8">
    <div className="md:w-1/2">
      <img src={Images.energy6} alt="Mobile Battery Storage" className="w-full rounded-lg shadow-lg"/>
    </div>
    <div className="md:w-1/2">
      <h3 className="text-2xl font-semibold mb-4">Advanced Mobile Battery Storage for Emergency Power Supply</h3>
      <p className="text-gray-700">
        In addition to all-in-one integrated cabinet design, Polinovel has developed advanced mobile battery energy storage systems for vehicles. These systems provide fast, reliable mobile power for applications like emergency power supply, temporary outdoor power, industrial and commercial users, and critical locations.
      </p>
    </div>
  </div>

  {/* Row 5: Left text, Right image */}
  <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 mb-16 gap-8">
    <div className="md:w-1/2">
      <h3 className="text-2xl font-semibold mb-4">Effective Custom Solution</h3>
      <p className="text-gray-700">
        As a professional lithium-ion solar battery manufacturer, Polinovel works with clients to develop custom solutions based on requirements like capacity, voltage, discharge rate, safety features, etc., enabling efficient energy distribution and storage.
        <br/><br/>
        Polinovel Commercial & Industrial Battery Energy Storage Systems feature a modular design with flexible voltage and capacity configurations. A range of storage capacities are offered, like 100kWh, 200kWh, etc., and can be expanded to megawatt-level systems, delivering efficient solutions for large-scale energy storage needs.
      </p>
    </div>
    <div className="md:w-1/2">
      <img src={Images.energy2} alt="Custom Energy Storage Solution" className="w-full rounded-lg shadow-lg"/>
    </div>
  </div>
</section>

    </section>
  );
}
