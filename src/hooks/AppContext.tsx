import { usePathname, useRouter } from "next/navigation";

const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navigateTo = (path: string) => () => router.push(path);
  return { navigateTo, router, pathname };
};

export { useNavigation };
