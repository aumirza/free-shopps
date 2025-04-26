import { Button } from "@/components/ui/button";
import { AlertDeleteButton } from "@/components/AlertDeleteButton";
import { IUser } from "./userColumns";

export function UserActionButton({ data }: { data: IUser }) {
  const handleDelete = async () => {};

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          console.log(data._id);
        }}
        className="bg-blue-100 text-blue-500 hover:bg-blue-400 hover:text-white"
      >
        <span>Edit</span>
      </Button>
      <AlertDeleteButton
        id={data._id}
        title={data.firstName}
        description="user"
        onDelete={handleDelete}
      />
    </div>
  );
}
