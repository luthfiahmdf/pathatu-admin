import { CardDashboard } from "@/components/ui/card-dashboard";
import { LuNotebookText } from "react-icons/lu";
import { columns } from "./columns";
import { MockBook } from "./store";
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
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "@/components/data-table";
export const Dashboard = () => {
  return (
    <div className="flex flex-col p-3 gap-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="flex md:flex-row flex-col gap-4 justify-between  w-full">
        <CardDashboard
          icon={<LuNotebookText />}
          title="Total Warga"
          value={100}
        />
        <CardDashboard title="Total Warga" value={100} />
        <CardDashboard title="Total Warga" value={100} />
        <CardDashboard title="Total Warga" value={100} />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Kelola Buku</h1>
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
              <div className="flex flex-row">
                <Label className="w-1/3">Judul</Label>
                <Input placeholder="Judul Buku" className="w-full" />
              </div>
              <div className="flex flex-row">
                <Label className="w-1/3">Sumber Buku</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Sumber Buku" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">a</SelectItem>
                    <SelectItem value="b">b</SelectItem>
                    <SelectItem value="c">c</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-row">
                <Label className="w-1/3">Kategori</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">a</SelectItem>
                    <SelectItem value="b">b</SelectItem>
                    <SelectItem value="c">c</SelectItem>
                  </SelectContent>
                </Select>
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

      <DataTable columns={columns} data={MockBook} />
    </div>
  );
};
