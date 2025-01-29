// import { Button, Divider, Input } from '@nextui-org/react';
// import { useContext, useEffect, useState } from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from '@/components/ui/card';
// import { motion } from 'framer-motion';
// import { EyeSlashFilledIcon } from '@/assets/icons/EyeSlashFilledIcon';
// import { EyeFilledIcon } from '@/assets/icons/EyeFilledIcon';
// import { Player } from '@lottiefiles/react-lottie-player';
// import { Icons } from '@/assets/icons/Icons';

// import { AuthContext } from '@/hooks/AuthContextProvider';
// import usePostMutate from '@/hooks/shared/usePostMutate';
// import Cookies from 'js-cookie';
// import toast from 'react-hot-toast';
// import Info from '@/assets/icons/InfoIcon';
// import useAxiosSecure from '@/hooks/useAxios';

// const SignIn = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();
//   const { user, setUser, googleSignIn } = useContext(AuthContext);
//   useEffect(() => {
//     if (user) {
//       navigate('/');
//     }
//   }, []);

//   const {
//     control,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();
//   const location = useLocation();

//   const { path } = location.state || {};
//   const [isVisible, setIsVisible] = useState(false);
//   const onSuccess = (res) => {
//     console.log(res, 'res');

//     toast.success('Successfully Logged In');

//     Cookies.set('user', res?.data?.data?.accessToken, { expires: 30 });
//     setUser(res?.data?.data?.user);
//     setIsLoading(false);
//     navigate(path || '/admin');
//   };
//   const onError = (err) => {
//     console.log(err);
//     //     console.log(err?.response?.data?.message);
//     toast.error(err?.response?.data?.message || 'Something went wrong');
//     setIsLoading(false);
//   };
//   const { mutate } = usePostMutate('/auth/login', onSuccess, onError);

//   const onSubmit = async (userData) => {
//     setIsLoading(true);

//     console.log(userData);
//     mutate(userData);
//   };

//   const toggleVisibility = () => setIsVisible(!isVisible);
//   const Axios = useAxiosSecure();

//   const providerSignIn = async (payload) => {
//     const token = await payload.user.getIdToken();
//     console.log(token);

//     const response = await Axios.post(
//       '/auth/provider',
//       {},
//       {
//         headers: {
//           Authorization: token,
//         },
//       }
//     );
//     toast.success('Successfully logged in');
//     setUser(response?.data?.data?.user);
//     navigate(path || '/admin');
//     Cookies.set('user', response?.data?.data?.accessToken, { expires: 30 });

//     console.log(response?.data);

//     return response;
//   };
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       className="relative min-h-screen "
//     >
//       <Link to={'/'}>
//         <Icons.logoICon className="absolute hidden  md:flex text-danger top-10 left-10" />
//       </Link>
//       {/* <Helmet>
//         <title>Sign In | Jobify</title>
//         <link rel="canonical" href="https://jobify-bd6c2.web.app/" />
//       </Helmet> */}

//       <div className="items-center justify-center w-full h-full min-h-screen grid-cols-3 mx-auto  md:grid">
//         <div className="items-center justify-center flex-1 hidden w-full h-full col-span-2 mx-auto bg-no-repeat banner-Container md:flex dark:bg-darkish ">
//           <Player
//             autoplay
//             loop
//             src="https://lottie.host/a1a5f6ba-fffd-4887-a289-638b75651637/gFaYX8uQLu.json"
//             style={{ height: '500px', width: '500px' }}
//           ></Player>
//         </div>
//         <div className="flex items-center justify-center flex-1 w-full min-h-screen mx-auto">
//           <Card className="w-full p-4 bg-transparent border-none md:p-10 ">
//             <CardHeader className="flex flex-col gap-4">
//               <p className="text-2xl font-medium">Sign in to Healthfiy</p>
//               <p className="text-sm ">
//                 New user?{' '}
//                 <Link to={'/signup'} className="text-danger hover:underline">
//                   Create an account
//                 </Link>
//               </p>
//             </CardHeader>

//             <CardContent>
//               <div className="flex items-center gap-4 px-4 py-4 my-0 text-white rounded-lg bg-light-blue-50">
//                 <Info filled className="text-sky-blue-50" />
//                 <div className="">
//                   <p className="font-medium text-tiny">
//                     Demo Admin: admin@gmail.com
//                   </p>
//                   <p className="font-medium text-tiny">
//                     Demo Password: A@123456
//                   </p>
//                 </div>
//               </div>
//               <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="flex flex-col gap-5 mt-8 text-center "
//               >
//                 <Controller
//                   name="email"
//                   control={control}
//                   defaultValue=""
//                   rules={{ required: ' Email is required' }}
//                   render={({ field }) => (
//                     <div>
//                       <Input
//                         {...field}
//                         type="email"
//                         isInvalid={errors.email ? true : false}
//                         classNames={{
//                           errorMessage: 'text-left',
//                         }}
//                         errorMessage={errors.email && errors.email.message}
//                         label="Email"
//                         variant={'bordered'}
//                       />
//                     </div>
//                   )}
//                 />

//                 <Controller
//                   name="password"
//                   control={control}
//                   defaultValue=""
//                   rules={{
//                     required: 'Password is required',
//                     minLength: {
//                       value: 6,
//                       message: 'Password is incorrect',
//                     },
//                   }}
//                   render={({ field }) => (
//                     <div>
//                       <Input
//                         {...field}
//                         type={isVisible ? 'text' : 'password'}
//                         variant={'bordered'}
//                         isInvalid={errors.password ? true : false}
//                         errorMessage={
//                           errors.password && errors.password.message
//                         }
//                         classNames={{
//                           errorMessage: 'text-left',
//                         }}
//                         label="Password"
//                         endContent={
//                           <button
//                             className="focus:outline-none"
//                             type="button"
//                             onClick={toggleVisibility}
//                           >
//                             {isVisible ? (
//                               <EyeSlashFilledIcon className="text-2xl pointer-events-none text-default-400" />
//                             ) : (
//                               <EyeFilledIcon className="text-2xl pointer-events-none text-default-400" />
//                             )}
//                           </button>
//                         }
//                       />
//                     </div>
//                   )}
//                 />

//                 <div className="text-right text-white underline cursor-pointer text-tiny ">
//                   Forgot password?
//                 </div>
//                 <Button
//                   disabled={isLoading}
//                   isLoading={isLoading}
//                   color="primary"
//                   className="w-full font-bold rounded-lg "
//                   type="submit"
//                 >
//                   Login
//                 </Button>
//                 <div className="relative flex items-center">
//                   <Divider className="flex-1" />
//                   <div className="relative flex justify-center text-xs uppercase">
//                     <span className="px-2  text-muted-foreground">Or</span>
//                   </div>
//                   <Divider className="flex-1" />
//                 </div>
//                 <Button
//                   color="secondary"
//                   onClick={() => {
//                     googleSignIn()
//                       .then((result) => {
//                         // setUser(result.user);

//                         setIsLoading(false);
//                         console.log(result);
//                         if (result?.user) {
//                           providerSignIn(result);
//                         }
//                       })
//                       .catch((error) => {
//                         console.log(error);
//                       });
//                   }}
//                 >
//                   <Icons.google className="w-4 h-4 mr-2" />
//                   Continue with Google
//                 </Button>
//               </form>
//             </CardContent>
//             <CardFooter></CardFooter>
//             <div className="w-full max-w-sm rounded-lg shadow-md"></div>
//           </Card>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SignIn;

// const containerVariants = {
//   hidden: {
//     opacity: 0,
//     x: '-100vh',
//   },
//   exit: {
//     x: '100vh',
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,

//       type: 'spring',
//     },
//   },
// };
