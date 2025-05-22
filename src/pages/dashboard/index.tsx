import { CardDashboard } from "@/components/ui/card-dashboard";
import { LuNotebookText } from "react-icons/lu";
import { columns } from "./columns";
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
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { VSbookSchema } from "./bookSchema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useSearchParams } from "react-router";
import { useCreateBook, useGetBooks } from "./hook";
import { TBook } from "./api";
import { useGetCategory } from "../category/hook";
import { useGetBookSource } from "../BooksSource/hook";
export const Dashboard = () => {

  const [params] = useSearchParams()
  const { data: category } = useGetCategory()
  const { data: bookSource } = useGetBookSource()
  const { mutate } = useCreateBook()
  const { data } = useGetBooks({
    page: Number(params.get('page')) || 1,
    size: Number(params.get('size')) || 10,
    search: params.get('search') || undefined
  });
  const form = useForm<z.infer<typeof VSbookSchema>>({
    resolver: zodResolver(VSbookSchema),
  });
  const handleSubmit = (values: z.infer<typeof VSbookSchema>) => {
    mutate(values, {
      onSuccess: () => console.log("success"),
    })
  }
  return (
    <div className="flex flex-col p-3 gap-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex md:flex-row flex-col gap-4 justify-between  w-full">
        <CardDashboard
          icon={<LuNotebookText />}
          title="Total Buku"
          value={data?.totalBooks ?? 0 as number}
        />
        <CardDashboard title="Total Kategori" value={10} />
        <CardDashboard title="Total Sumber Buku" value={10} />
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
                    name="bookSourceId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="w-1/3">Sumber Buku</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Pilih Sumber Buku" />
                            </SelectTrigger>
                            <SelectContent>
                              {bookSource?.map((item, index) => (
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
                    name="categoryId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="w-1/3">Kategori</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Pilih Sumber Buku" />
                            </SelectTrigger>
                            <SelectContent>
                              {category?.data.map((item, index) => (
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
      <DataTable columns={columns} data={data?.data as TBook[]} totalData={data?.pagination?.total as number} />
    </div>
  );
};
