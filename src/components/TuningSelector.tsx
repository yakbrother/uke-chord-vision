import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { tunings } from "@/data/chordData";
import { Music } from "lucide-react";

interface TuningSelectorProps {
  selectedTuning: string;
  onTuningChange: (tuning: string) => void;
}

export const TuningSelector = ({ selectedTuning, onTuningChange }: TuningSelectorProps) => {
  return (
    <div className="flex items-center space-x-3 bg-card rounded-lg p-4 shadow-sm">
      <div className="flex items-center space-x-2">
        <Music className="w-5 h-5 text-primary" />
        <span className="font-medium text-card-foreground">Tuning:</span>
      </div>
      
      <Select value={selectedTuning} onValueChange={onTuningChange}>
        <SelectTrigger className="w-[200px] bg-background">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(tunings).map(([key, tuning]) => (
            <SelectItem key={key} value={key}>
              {tuning.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <div className="text-sm text-muted-foreground">
        {tunings[selectedTuning]?.notes.join(" - ")}
      </div>
    </div>
  );
};