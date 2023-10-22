"use client"
import axios from "axios";
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react";
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogTrigger, DialogDescription, DialogPortal } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { title } from "process";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
    age: z.string({
        required_error: "Required"
    }).min(1, {message: "Required"}),
    sex: z.string({
        required_error: "Required"
    }).min(1, {message: 'Required'}),
    cp: z.string({
        required_error: "Required"
    }).min(1, {message: 'Required'}),
    trestbps: z.string({
        required_error: "Required"
    }).min(1, {message: 'Required'}),
    chol: z.string({
        required_error: "Required"
    }).min(1, {message: 'Required'}),
    fbs: z.string({
        required_error: "Required"
    }).min(1, {message: 'Required'}),
    restecg: z.string({
        required_error: "Required."
    }).min(1, {message: 'Required'}),
    thalach: z.string({
        required_error: "Required."
    }).min(1, {message: 'Required'}),
    exang: z.string({
        required_error: "Required"
    }).min(1, {message: 'Required'}),
    oldpeak: z.string({
        required_error: "Required."
    }).min(1, {message: 'Required'}),
    slope: z.string({
        required_error: "Required."
    }).min(1, {message: 'Required'}),
    ca: z.string({
        required_error: "Required"
    }).min(1, {message: 'Required'}),
    thal: z.string({
        required_error: "Required"
    }).min(1, {message: 'Required'}),
})
const defaultValues = {
    age: '',
    sex: '',
    cp: '',
    chol: '',
    ca: '',
    exang: '',
    fbs: '',
    oldpeak: '',
    restecg: '',
    slope: '',
    thal: '',
    thalach: '',
    trestbps: ''
}
type ResultProps ={
    prediction: number | null,
    message: string
}

const Test = () => {
    const { toast } = useToast();
    const [result, setResult] = useState<ResultProps>({
        prediction: null,
        message: "",
    });
    const [open, setOpen] = useState(false);
    const mutation = useMutation({
        mutationFn: async (formData : z.infer<typeof FormSchema>) => {
            const { data } = await axios.post('http://127.0.0.1:5000/predict', formData)
            return data as ResultProps;
        },
        onError: (err) => {
            toast({
            title: err.name,
            description: err.message,
            variant: 'destructive'
        })
        },
        onSuccess: (data) => {
            setResult(data);
            setOpen((prev)=> !prev);
        },        
    });
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues,
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
        mutation.mutate(data);
        //form.reset();
    }

 
    return (
        <div className='flex items-center justify-center lg:h-screen'>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger></DialogTrigger>
                <DialogContent >
                    <DialogHeader>
                        <DialogTitle><div className="font-normal text-md pb-3">Result</div></DialogTitle>
                        <DialogDescription className="font-semibold text-lg">{result.message}</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3 p-11 pt-24 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:justify-center lg:items-end lg:gap-6 '>
                <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Age</FormLabel>
                                    <FormControl>
                                    <Input required placeholder="Input" type="number" min={0} max={100} {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="sex"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sex</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="0">Male</SelectItem>
                                        <SelectItem value="1">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cp"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Chest Pain Type (select 'Asymptomatic' if no pain)</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value='0'>Typical Angina</SelectItem>
                                        <SelectItem value='1'>Atypical Angina</SelectItem>
                                        <SelectItem value='2'>Non-anginal Pain</SelectItem>
                                        <SelectItem value='3'>Asymptomatic</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="trestbps"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Resting Blood Pressure (mmHG)</FormLabel>
                                    <FormControl>
                                    <Input required placeholder="Input" type="number" min={0} max={220} {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="chol"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Serum Cholesterol (mg/dl)</FormLabel>
                                    <FormControl>
                                    <Input required placeholder="Input" type="number" min={0} max={500} {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="fbs"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fasting Blood Sugar (mg/dl)</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                            <SelectItem value='1'>Over 120 mg/dl</SelectItem>
                                            <SelectItem value='0'>Under 120 mg/dl</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="restecg"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Resting ElectroCardioGraphic (ECG) Results</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value='0'>Normal</SelectItem>
                                        <SelectItem value='1'>ST-T wave abnormality</SelectItem>
                                        <SelectItem value='2'>Left Ventricular Hyperthrophy</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="thalach"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Maximum Heart Rate Achieved (bpm)</FormLabel>
                                    <FormControl>
                                    <Input required placeholder="Input" type="number" min={0} max={350} {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                        <FormField
                            control={form.control}
                            name="exang"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Do you have Exercise Induced Angina?</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='1'>Yes</SelectItem>
                                            <SelectItem value='0'>No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    <FormField
                        control={form.control}
                        name="oldpeak"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Oldpeak (ST depression induced by exercise relative to rest)</FormLabel>
                                    <FormControl>
                                    <Input required placeholder="Input" type="number" min={0} max={7} step={0.10} {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                        <FormField
                            control={form.control}
                            name="slope"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slope (Peak exercise ST segment)</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='0'>Unsloping</SelectItem>
                                            <SelectItem value='1'>Flat</SelectItem>
                                            <SelectItem value='2'>Downsloping</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    
                    <FormField
                        control={form.control}
                        name="ca"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number of Major Vessels Colored by Flourosopy</FormLabel>
                                    <FormControl>
                                    <Input required placeholder="Input" type="number" min={0} max={3}  {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                        <FormField
                            control={form.control}
                            name="thal"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Thalassemia</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='3'>Normal</SelectItem>
                                            <SelectItem value='6'>Fixed Defect</SelectItem>
                                            <SelectItem value='7'>Reversible Defect</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                    <Button disabled={mutation.isPending} type="submit">{mutation.isPending ? <Loader2 className="w-3 h-3 animate-spin"/> : 'See Results'}</Button>
                </form>
            </Form>
        </div>
    )
}

export default Test;
