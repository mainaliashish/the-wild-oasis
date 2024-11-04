import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as loginOutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: loginOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
      toast.success("Logout successfully.");
    },
  });
  return { logout, isLoading };
}
