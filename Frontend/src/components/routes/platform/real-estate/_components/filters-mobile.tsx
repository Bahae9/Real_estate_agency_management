import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Filters from "./filters";

const FiltersMobile = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex gap-2 justify-between items-center 2xl:hidden">
      <h4 className="font-semibold text-lg">Trouvez instantanément!</h4>
      <Dialog open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
        <DialogTrigger asChild>
          <Button>Filtres</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-0 h-[80vh]">
          <Filters cardClassName="border-0" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FiltersMobile;
