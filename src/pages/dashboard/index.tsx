import { CardDashboard } from "@/components/ui/card-dashboard";
import { LuNotebookText } from "react-icons/lu";
import { columns } from "./columns";
import { MockBook } from "./store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DataTable } from "@/components/data-table";
import { bookSources } from "../BooksSource/store";
import { bookCategories } from "../category/store";
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { VSbookSchema } from "./bookSchema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
export const Dashboard = () => {


  const form = useForm<z.infer<typeof VSbookSchema>>({
    resolver: zodResolver(VSbookSchema),
  });
  const handleSubmit = (values: z.infer<typeof VSbookSchema>) => {
    console.log(values)
  }
  return (
    <div className="flex flex-col p-3 gap-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex md:flex-row flex-col gap-4 justify-between  w-full">
        <CardDashboard
          icon={<LuNotebookText />}
          title="Total Buku"
          value={MockBook.length}
        />
        <CardDashboard title="Total Kategori" value={bookCategories.length} />
        <CardDashboard title="Total Sumber Buku" value={bookSources.length} />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Kelola Buku</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} id="bookForm">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Buku
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Tambah Buku Baru</DialogTitle>
                  <DialogDescription>
                    Isi detail buku yang akan ditambahkan ke koleksi.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="w-1/3">Judul</FormLabel>
                        <FormControl>
                          <Input onChange={field.onChange} placeholder="Judul Buku" className="w-full" />
                        </FormControl>
                      </FormItem>
                    )}
                  />


                  <FormField
                    control={form.control}
                    name="bookSource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="w-1/3">Sumber Buku</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Pilih Sumber Buku" />
                            </SelectTrigger>
                            <SelectContent>
                              {bookSources.map((item, index) => (
                                <SelectItem key={index} value={item.id}>{item.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>

                        <FormLabel className="w-1/3">Kategori</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Pilih Sumber Buku" />
                            </SelectTrigger>
                            <SelectContent>
                              {bookCategories.map((item, index) => (
                                <SelectItem key={index} value={item.id}>{item.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  form="bookForm"
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Simpan
                </Button>
              </DialogContent>
            </Dialog>
          </form>
        </Form>
      </div>

      <DataTable columns={columns} data={MockBook} />
    </div>
  );
};
