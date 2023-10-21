import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function Home() {
  return (
    <div className='flex items-center justify-center lg:h-screen'>
      <div className='flex flex-col gap-3 p-11 pt-16 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:justify-center lg:items-end lg:gap-6'>
        <div>
          <Label htmlFor='age'>Age</Label>
          <Input id='age' placeholder='Input' type='number' min={1} max={100}/> 
        </div>

        <div>
        <Label htmlFor='sex'>Sex</Label>
          <Select>
            <SelectTrigger id='sex'>
              <SelectValue placeholder='Select'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='0'>Male</SelectItem>
              <SelectItem value='1'>Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
        <Label htmlFor='cp'>Chest Pain Type (select 'Asymptomatic' if no pain)</Label>
          <Select>
            <SelectTrigger id='cp'>
              <SelectValue placeholder='Select'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='0'>Typical Angina</SelectItem>
              <SelectItem value='1'>Atypical Angina</SelectItem>
              <SelectItem value='2'>Non-anginal Pain</SelectItem>
              <SelectItem value='3'>Asymptomatic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor='trestbps'>Resting Blood Pressure (mmHG)</Label>
          <Input placeholder='Input' id='trestbps' type='number' min={0} max={220}/>
        </div>

        <div>
          <Label htmlFor='chol'>Serum Cholesterol (mg/dl)</Label>
          <Input placeholder='Input' id='chol' type='number' min={0} max={500}/>
        </div>

        <div>
        <Label htmlFor='fbs'>Fasting Blood Sugar (mg/dl)</Label>
          <Select>
            <SelectTrigger id='fbs'>
              <SelectValue placeholder='Select'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>Over 120 mg/dl</SelectItem>
              <SelectItem value='0'>Under 120 mg/dl</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
        <Label htmlFor='restecg'>Resting ElectroCardioGraphic (ECG) Results</Label>
          <Select>
            <SelectTrigger id='restecg'>
              <SelectValue placeholder='Select'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='0'>Normal</SelectItem>
              <SelectItem value='1'>ST-T wave abnormality</SelectItem>
              <SelectItem value='2'>Left Ventricular Hyperthrophy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor='thalach'>Maximum Heart Rate Achieved (bpm)</Label>
          <Input placeholder='Input' id='thalach' type='number' min={0} max={300}/>
        </div>

        <div>
        <Label htmlFor='exang'>Do you have Exercise Induced Angina?</Label>
          <Select>
            <SelectTrigger id='exang'>
              <SelectValue placeholder='Select'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>Yes</SelectItem>
              <SelectItem value='0'>No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor='oldpeak'>Oldpeak (ST depression induced by exercise relative to rest)</Label>
          <Input placeholder='Input' id='oldpeak' type='number' min={0} max={7} step={0.10}/>
        </div>

        <div>
        <Label htmlFor='slope'>Slope (Peak exercise ST segment)</Label>
          <Select>
            <SelectTrigger id='slope'>
              <SelectValue placeholder='Select'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='0'>Unsloping</SelectItem>
              <SelectItem value='1'>Flat</SelectItem>
              <SelectItem value='2'>Downsloping</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor='ca'>Number of Major Vessels Colored by Flourosopy</Label>
          <Input placeholder='Input' id='ca' type='number' min={0} max={3} step={1}/>
        </div>

        <div>
        <Label htmlFor='thal'>Thalassemia</Label>
          <Select>
            <SelectTrigger id='thal'>
              <SelectValue placeholder='Select'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='3'>Normal</SelectItem>
              <SelectItem value='6'>Fixed Defect</SelectItem>
              <SelectItem value='7'>Reversible Defect</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button>See Results</Button>

      </div>
    </div>
  )
}
