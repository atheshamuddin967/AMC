
export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">AMC</h3>
            <p className="text-gray-400">Building the Future, Powering Sustainability</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-primary cursor-pointer transition-colors">Construction</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Green Energy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Low Current Systems</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Landscape</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Projects</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors">
                f
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors">
                in
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors">
                X
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AMC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};