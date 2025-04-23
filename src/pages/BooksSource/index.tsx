import { DataTable } from "@/components/data-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Plus } from "lucide-react";
import { columns } from "./columns";
import { bookSources } from "./store";

export const BookSourcePage = () => {
  return (
    <div className="flex flex-col p-3 gap-5">
      <h1 className="text-2xl font-bold">Sumber Buku</h1>

      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Kelola Sumber Buku</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Sumber Buku
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Tambah Sumber Baru</DialogTitle>
              <DialogDescription>
                Isi detail Sumber Buku yang akan ditambahkan ke koleksi.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row">
                <Label className="w-1/3">Nama Sumber Buku</Label>
                <Input placeholder="Judul Buku" className="w-full" />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700"
              >
                Simpan
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={bookSources} />
    </div>
  );
};
