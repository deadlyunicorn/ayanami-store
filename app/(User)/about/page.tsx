import Link from "next/link"
import Image from "next/image"
import { ReactNode } from "react"

const About = () => (
    <main className="flex flex-col justify-around min-h-[70vh] ">

        <div className="px-2 text-center">

                Hello! This is one of my little fun projects. 
                <br/> <em className="underline">This is not a real e-shop.</em>
                <br/>Payments will be considered donations. 
                <br/>Refunds may not be possible.
                <br/>
                    <LinkNewTab
                        
                        href={'https://github.com/deadlyunicorn/nextjs-e-commerce-app'}>
                            <span
                            className="
                            text-purple-600 hover:text-purple-500 
                            dark:hover:text-purple-300 dark:text-purple-400" >
                            
                                View source code
                            
                            </span>
                    </LinkNewTab> 
        </div>

            

        <div className="flex flex-col items-center">
            
            <span>Made by&emsp;
                <span className="text-transparent">
                    deadlyunicorn.
                </span>
            </span>
            <LinkNewTab 
            href={'https://github.com/deadlyunicorn/'}>

                <Image
                className="dark:hidden inline"
                alt="deadlyunicorn logo"
                src="/logo.png"
                width={400}
                height={100} />
                <Image
                className="hidden dark:inline"
                alt="deadlyunicorn logo"
                src="/logo_darkmode.png"
                width={400}
                height={100}
                />
            </LinkNewTab>
        </div>

            <div>
                Tools used

                <div className="
                    grid grid-cols-2 
                    justify-items-center
                    gap-y-2 pt-2">

                {/* //Vercel */}
                <LinkNewTab href={'https://vercel.com/'}>
                        <svg 
                            fill="currentColor"
                            className="h-5"
                            viewBox="0 0 283 64">
                            <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path>
                        </svg>
                    </LinkNewTab>

                    {/* Tailwind */}
                    <LinkNewTab href={'https://tailwindcss.com/'}>
                        <svg 
                            className="h-5"
                            viewBox="0 0 248 31" ria-label="Vercel logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg>
                    </LinkNewTab>

                    <LinkNewTab href="https://commercejs.com/">
                        <svg 
                            className="h-5"
                            viewBox="0 0 367 60" aria-label="Commerce.js logo"><path d="M126.511 16.4375C122.998 16.4375 120.22 17.6514 118.181 20.0802C116.155 22.4931 115.14 25.8038 115.14 30.0122C115.14 34.34 116.118 37.6887 118.071 40.0562C120.038 42.4089 122.836 43.5847 126.467 43.5847C128.697 43.5847 131.239 43.1702 134.096 42.3401V45.7111C131.881 46.5697 129.147 47 125.899 47C121.191 47 117.554 45.5229 114.989 42.5664C112.439 39.611 111.163 35.4101 111.163 29.9667C111.163 26.5577 111.777 23.5717 113 21.0075C114.238 18.4434 116.017 16.4682 118.335 15.0809C120.666 13.6936 123.406 13 126.555 13C129.906 13 132.836 13.6334 135.344 14.9001L133.769 18.2034C131.348 17.0265 128.929 16.4375 126.511 16.4375Z" fill="currentColor"></path><path d="M159.524 34.4784C159.524 38.4099 158.574 41.4844 156.672 43.6991C154.769 45.9004 152.142 47 148.79 47C146.719 47 144.881 46.4949 143.275 45.4817C141.669 44.4685 140.429 43.0171 139.555 41.1244C138.681 39.2317 138.245 37.016 138.245 34.4784C138.245 30.5469 139.189 27.4878 141.077 25.3009C142.964 23.1006 145.585 22 148.938 22C152.177 22 154.749 23.1222 156.651 25.3667C158.566 27.6122 159.524 30.6498 159.524 34.4784ZM141.88 34.4784C141.88 37.5592 142.472 39.9065 143.655 41.5205C144.839 43.1344 146.578 43.9419 148.875 43.9419C151.17 43.9419 152.91 43.1426 154.093 41.5431C155.291 39.9302 155.888 37.5746 155.888 34.4794C155.888 31.4131 155.291 29.0873 154.093 27.5032C152.91 25.9037 151.155 25.1044 148.832 25.1044C146.537 25.1044 144.803 25.8893 143.633 27.459C142.465 29.0277 141.88 31.3678 141.88 34.4784Z" fill="currentColor"></path><path d="M194.721 47V31.0286C194.721 29.0717 194.328 27.6079 193.542 26.6384C192.756 25.6531 191.537 25.1599 189.882 25.1599C187.708 25.1599 186.101 25.8248 185.064 27.1535C184.026 28.4822 183.507 30.5291 183.507 33.2912V47H180.014V31.0286C180.014 29.0717 179.621 27.6079 178.835 26.6384C178.05 25.6531 176.821 25.1599 175.153 25.1599C172.965 25.1599 171.359 25.8615 170.335 27.2655C169.326 28.6539 168.821 30.9385 168.821 34.1194V47H165.327V22.4492H168.169L168.737 25.8091H168.904C169.563 24.6144 170.491 23.6805 171.682 23.0093C172.888 22.3371 174.235 22.0011 175.721 22.0011C179.326 22.0011 181.682 23.3905 182.791 26.1672H182.959C183.645 24.8825 184.643 23.8669 185.947 23.1203C187.251 22.3738 188.739 22 190.407 22C193.016 22 194.967 22.7172 196.256 24.1506C197.562 25.5693 198.213 27.8466 198.213 30.9825V46.999H194.721V47Z" fill="currentColor"></path><path d="M234.376 47V31.0286C234.376 29.0717 233.983 27.6079 233.198 26.6384C232.412 25.6531 231.192 25.1599 229.536 25.1599C227.363 25.1599 225.756 25.8248 224.719 27.1535C223.681 28.4822 223.161 30.5291 223.161 33.2912V47H219.668V31.0286C219.668 29.0717 219.277 27.6079 218.491 26.6384C217.705 25.6531 216.478 25.1599 214.809 25.1599C212.62 25.1599 211.014 25.8615 209.992 27.2655C208.982 28.6539 208.477 30.9385 208.477 34.1194V47H204.983V22.4492H207.824L208.393 25.8091H208.562C209.221 24.6144 210.146 23.6805 211.338 23.0093C212.545 22.3371 213.892 22.0011 215.378 22.0011C218.981 22.0011 221.339 23.3905 222.446 26.1672H222.616C223.303 24.8825 224.298 23.8669 225.602 23.1203C226.907 22.3738 228.394 22 230.064 22C232.672 22 234.621 22.7172 235.911 24.1506C237.215 25.5693 237.868 27.8466 237.868 30.9825V46.999H234.376V47Z" fill="currentColor"></path><path d="M254.606 47C251.226 47 248.555 45.9147 246.593 43.7432C244.645 41.5717 243.672 38.5566 243.672 34.698C243.672 30.8096 244.576 27.7215 246.384 25.4327C248.206 23.1439 250.648 22 253.709 22C256.575 22 258.842 22.9978 260.511 24.9935C262.182 26.9737 263.016 29.5927 263.016 32.8505V35.1609H247.261C247.33 37.9929 248.006 40.1418 249.286 41.6097C250.578 43.0776 252.395 43.8111 254.731 43.8111C257.194 43.8111 259.628 43.268 262.035 42.1827V45.4395C260.81 45.997 259.649 46.3931 258.55 46.6276C257.465 46.8755 256.15 47 254.606 47ZM253.667 25.0583C251.83 25.0583 250.363 25.6888 249.263 26.951C248.179 28.2122 247.538 29.9579 247.344 32.188H259.302C259.302 29.8848 258.814 28.1237 257.84 26.9068C256.867 25.6744 255.476 25.0583 253.667 25.0583Z" fill="currentColor"></path><path d="M279.55 22C280.594 22 281.531 22.089 282.36 22.2691L281.868 25.7182C280.895 25.4941 280.036 25.3821 279.292 25.3821C277.39 25.3821 275.759 26.1893 274.4 27.8018C273.055 29.4154 272.382 31.4237 272.382 33.8278V47H268.819V22.4481H271.759L272.166 26.9956H272.338C273.21 25.3978 274.263 24.1654 275.493 23.2994C276.724 22.4335 278.075 22 279.55 22Z" fill="currentColor"></path><path d="M295.622 47C292.328 47 289.773 45.9292 287.961 43.7876C286.161 41.6305 285.262 38.5857 285.262 34.6543C285.262 30.62 286.174 27.5022 288.001 25.3009C289.842 23.1006 292.46 22 295.851 22C296.943 22 298.037 22.1245 299.131 22.3744C300.223 22.6234 301.082 22.9175 301.704 23.2539L300.646 26.3573C299.885 26.0353 299.054 25.771 298.155 25.5653C297.255 25.3451 296.46 25.2351 295.766 25.2351C291.144 25.2351 288.831 28.3601 288.831 34.6101C288.831 37.5736 289.392 39.8479 290.513 41.433C291.648 43.0171 293.323 43.8102 295.538 43.8102C297.434 43.8102 299.379 43.3771 301.372 42.511V45.7471C299.852 46.5824 297.933 47 295.622 47Z" fill="currentColor"></path><path d="M316.508 47C313.127 47 310.456 45.9147 308.495 43.7432C306.548 41.5717 305.573 38.5566 305.573 34.698C305.573 30.8096 306.478 27.7215 308.286 25.4327C310.108 23.1439 312.55 22 315.611 22C318.477 22 320.743 22.9978 322.413 24.9935C324.082 26.9737 324.917 29.5927 324.917 32.8505V35.1609H309.163C309.233 37.9929 309.907 40.1418 311.187 41.6097C312.48 43.0776 314.296 43.8111 316.633 43.8111C319.094 43.8111 321.53 43.268 323.936 42.1827V45.4395C322.711 45.997 321.551 46.3931 320.452 46.6276C319.366 46.8755 318.052 47 316.508 47ZM315.569 25.0583C313.733 25.0583 312.264 25.6888 311.166 26.951C310.081 28.2122 309.44 29.9579 309.246 32.188H321.203C321.203 29.8848 320.715 28.1237 319.742 26.9068C318.768 25.6744 317.377 25.0583 315.569 25.0583Z" fill="currentColor"></path><path d="M329.036 43.908C329.036 42.953 329.242 42.232 329.657 41.747C330.083 41.248 330.691 40.998 331.477 40.998C332.278 40.998 332.899 41.248 333.34 41.747C333.796 42.232 334.023 42.953 334.023 43.908C334.023 44.835 333.796 45.549 333.34 46.048C332.885 46.547 332.265 46.797 331.477 46.797C330.773 46.797 330.188 46.575 329.719 46.133C329.263 45.676 329.036 44.935 329.036 43.908Z" fill="currentColor"></path><path d="M338.077 55.702C336.768 55.702 335.705 55.523 334.89 55.167V52.279C335.843 52.564 336.78 52.707 337.704 52.707C338.781 52.707 339.567 52.4 340.063 51.787C340.574 51.187 340.829 50.267 340.829 49.027V21.727H344.265V48.77C344.266 53.391 342.203 55.702 338.077 55.702ZM340.54 15.373C340.54 14.56 340.732 13.968 341.12 13.597C341.506 13.212 341.988 13.019 342.568 13.019C343.119 13.019 343.595 13.211 343.997 13.597C344.396 13.982 344.596 14.574 344.596 15.373C344.596 16.172 344.396 16.771 343.997 17.17C343.596 17.555 343.12 17.748 342.568 17.748C341.988 17.748 341.506 17.556 341.12 17.17C340.733 16.771 340.54 16.172 340.54 15.373Z" fill="currentColor"></path><path d="M366.508 39.9806C366.508 42.2251 365.703 43.9563 364.096 45.1742C362.487 46.3921 360.231 47 357.323 47C354.248 47 351.85 46.4949 350.128 45.4817V42.0924C351.243 42.6787 352.435 43.1416 353.705 43.479C354.989 43.8164 356.223 43.9851 357.408 43.9851C359.242 43.9851 360.653 43.6847 361.64 43.0829C362.628 42.4658 363.121 41.5349 363.121 40.2871C363.121 39.349 362.727 38.5497 361.937 37.8894C361.16 37.2146 359.637 36.4215 357.366 35.5111C355.208 34.6759 353.669 33.9487 352.753 33.3335C351.85 32.703 351.172 31.9901 350.721 31.1981C350.284 30.406 350.065 29.4607 350.065 28.3601C350.065 26.3943 350.833 24.8462 352.372 23.7168C353.91 22.5719 356.019 22 358.698 22C361.195 22 363.636 22.5287 366.02 23.5851L364.772 26.5558C362.443 25.5581 360.335 25.0592 358.444 25.0592C356.779 25.0592 355.524 25.3307 354.676 25.8738C353.831 26.4159 353.408 27.1648 353.408 28.1183C353.408 28.7633 353.563 29.3146 353.873 29.7693C354.198 30.2229 354.713 30.656 355.418 31.0674C356.125 31.4779 357.479 32.0734 359.482 32.8501C362.233 33.8921 364.087 34.9403 365.048 35.9967C366.021 37.0531 366.508 38.381 366.508 39.9806Z" fill="currentColor"></path><path d="M51.9277 0.756117C52.9028 -0.252039 54.4838 -0.252039 55.4594 0.756117L89.1534 35.5982C90.1285 36.6063 90.1285 38.2414 89.1534 39.2502L86.0727 42.4353L48.8476 3.94245L51.9277 0.756117Z" fill="currentColor"></path><path d="M59.0127 22.2828L38.4958 1.07695C37.5207 0.0687988 35.9381 0.0687982 34.9641 1.07813L1.69839 35.4926C0.723292 36.5014 0.723292 38.1365 1.69953 39.1446L20.4522 58.526C21.4273 59.5335 23.006 59.5347 23.9828 58.5271L45.3873 36.4398L66.8549 58.54C67.8283 59.5423 69.4007 59.5435 70.3764 58.5424L82.1003 46.5108L59.0127 22.2828ZM28.9042 36.9559C25.0418 36.9559 22.036 33.7045 22.036 29.8548C22.036 26.0034 25.0418 22.7532 28.9042 22.7532C32.7666 22.7532 35.7725 26.004 35.7725 29.8548C35.7713 33.7056 32.7655 36.9559 28.9042 36.9559Z" fill="currentColor"></path><path d="M31.3667 30.4688C31.3598 30.1357 31.2294 29.8372 30.9747 29.5739C30.7847 29.3768 30.5793 29.2618 30.3604 29.2284C30.1374 29.1921 29.9247 29.205 29.7216 29.2683C29.5214 29.3287 29.2684 29.4266 28.9621 29.5633C28.6813 29.6929 28.4669 29.785 28.3188 29.8384C28.1702 29.8847 28.0397 29.9029 27.9269 29.8935C27.8174 29.88 27.7141 29.8231 27.6171 29.7234C27.4816 29.5832 27.4237 29.4266 27.443 29.253C27.4623 29.0795 27.5014 28.893 27.8236 28.5592L28.4646 27.8965L28.0392 27.4567L27.5689 27.9429C27.5462 27.9528 27.5286 27.9511 27.5156 27.9382L27.1622 27.5528C27.1463 27.5364 27.127 27.5294 27.1038 27.5329C27.0811 27.5294 27.0618 27.5364 27.0459 27.5528L26.6681 27.9429C26.6522 27.9599 26.6443 27.981 26.6443 28.008C26.6443 28.0279 26.6522 28.0461 26.6681 28.0631L27.0357 28.4232C27.0482 28.4367 27.0499 28.4549 27.0402 28.4783C26.8207 28.785 26.7146 29.0988 26.7209 29.419C26.7305 29.7357 26.8582 30.0207 27.1032 30.2741C27.2932 30.4712 27.4986 30.5896 27.7175 30.6289C27.9337 30.6659 28.1464 30.6524 28.3557 30.5896C28.5656 30.5263 28.8203 30.426 29.1203 30.2894C29.3943 30.1726 29.6059 30.0905 29.754 30.0442C29.9026 29.9908 30.0348 29.9709 30.151 29.9838C30.2639 29.9938 30.3655 30.0454 30.4557 30.1392C30.5878 30.2753 30.6474 30.4377 30.6343 30.6242C30.6247 30.8072 30.5493 31.026 30.3587 31.2224L29.4238 32.1544L29.8277 32.6042L30.4698 32.0054C30.4925 31.9954 30.5101 31.9972 30.5232 32.0107L30.8425 32.3508C30.8584 32.3672 30.8766 32.3755 30.8958 32.3755C30.9214 32.3755 30.9429 32.3672 30.9588 32.3508L31.3366 31.9608C31.3525 31.9438 31.3593 31.9245 31.3559 31.9004C31.3587 31.877 31.3525 31.857 31.3366 31.84L31.0127 31.5145C30.9996 31.5016 30.9979 31.4828 31.0076 31.4594C31.2538 31.1321 31.3735 30.8019 31.3667 30.4688Z" fill="currentColor"></path></svg>
                    </LinkNewTab>

                    <LinkNewTab href={'https://nextjs.org/'}>
                        <svg 
                            className="h-5 dark:fill-white"
                            aria-label="Next.js logotype" viewBox="0 0 394 79"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="var(--geist-foreground)"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="var(--geist-foreground)"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="var(--geist-foreground)"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="var(--geist-foreground)"></path><path clip-rule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="var(--geist-foreground)" fill-rule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="var(--geist-foreground)"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="var(--geist-foreground)"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="var(--geist-foreground)"></path></svg>
                    </LinkNewTab>
                    <LinkNewTab href={'https://sendgrid.com'}>
                       <svg width="147px" height="33px" viewBox="0 0 147 33" version="1.1"><title>SendGrid logo</title><g id="Active" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Products-Hover" transform="translate(-80.000000, -37.000000)"><g id="Navigation-Bar"><g id="SG-Twilio-Logo" transform="translate(80.000000, 37.000000)"><path d="M50.8034045,22.808402 C51.4136046,21.4424019 52.6924047,20.5124018 54.3784049,20.5124018 C56.064405,20.5124018 57.3142051,21.2970019 57.8374052,22.808402 L50.8034045,22.808402 Z M61.8484055,24.5524022 C61.8484055,20.3668018 58.7962053,17.0244015 54.3494049,17.0244015 C50.1638045,17.0244015 46.7922042,20.3958018 46.7922042,24.5816022 C46.7922042,28.7670026 49.9316045,32.1386029 54.4658049,32.1386029 C57.6060052,32.1386029 59.8646054,30.6238027 61.1354055,28.4524025 L57.9770052,26.5690024 C57.3070051,27.8546025 56.020805,28.6508026 54.4948049,28.6508026 C52.4020047,28.6508026 51.0942046,27.6042025 50.6290045,26.0056023 L61.8484055,26.0056023 L61.8484055,24.5524022 Z M142.916013,24.5524022 C142.916013,22.401602 141.346413,20.6576018 139.195812,20.6576018 C136.986812,20.6576018 135.300812,22.314402 135.300812,24.5524022 C135.300812,26.7904024 136.986812,28.4764025 139.195812,28.4764025 C141.346413,28.4764025 142.916013,26.7034024 142.916013,24.5524022 L142.916013,24.5524022 Z M131.406012,24.5816022 C131.406012,19.4372017 135.184612,17.0244015 138.469012,17.0244015 C140.358213,17.0244015 141.840613,17.7220016 142.799813,18.7392017 L142.799813,10.630001 L146.781813,10.630001 L146.781813,31.8478028 L142.799813,31.8478028 L142.799813,30.2204027 C141.840613,31.3540028 140.300213,32.1386029 138.411012,32.1386029 C135.329812,32.1386029 131.406012,29.6970027 131.406012,24.5816022 L131.406012,24.5816022 Z M128.480811,15.1032014 C129.796412,15.1032014 130.862812,14.0368013 130.862812,12.7212011 C130.862812,11.405601 129.796412,10.3392009 128.480811,10.3392009 C127.165411,10.3392009 126.099211,11.405601 126.099211,12.7212011 C126.099211,14.0368013 127.165411,15.1032014 128.480811,15.1032014 L128.480811,15.1032014 Z M126.490011,17.3152015 L130.471812,17.3152015 L130.471812,31.8478028 L126.490011,31.8478028 L126.490011,21.1810019 L125.044811,21.1808019 L126.490011,17.3152015 Z M115.88221,17.3152015 L119.835211,17.3152015 L119.835211,19.6986018 C120.561811,18.1872016 121.869811,17.3152015 123.846211,17.3152015 L125.445011,17.3152015 L124.001211,21.1808019 L122.916011,21.1808019 C120.794411,21.1808019 119.864211,22.285402 119.864211,24.9884022 L119.864211,31.8478028 L115.88221,31.8478028 L115.88221,17.3152015 Z M93.4808084,21.2390019 C93.4808084,15.1932014 98.0442088,10.3392009 104.322209,10.3392009 C107.46261,10.3392009 110.10341,11.470001 112.01541,13.2720012 C112.79361,14.0052013 113.45081,14.8498013 113.97201,15.7746014 L110.42621,17.9254016 C109.11821,15.5128014 107.11261,14.2630013 104.351409,14.2630013 C100.485609,14.2630013 97.4918087,17.4314016 97.4918087,21.2390019 C97.4918087,25.1338022 100.427609,28.2146025 104.496609,28.2146025 C107.57781,28.2146025 109.75741,26.4708024 110.51321,23.7676021 L103.857209,23.7676021 L103.857209,19.9020018 L114.87301,19.9020018 L114.87301,21.5296019 C114.87301,27.2266024 110.80401,32.1386029 104.496609,32.1386029 C97.8698088,32.1386029 93.4808084,27.1104024 93.4808084,21.2390019 L93.4808084,21.2390019 Z M88.6808079,24.5524022 C88.6808079,22.401602 87.1114078,20.6576018 84.9606076,20.6576018 C82.7516074,20.6576018 81.0656072,22.314402 81.0656072,24.5524022 C81.0656072,26.7904024 82.7516074,28.4764025 84.9606076,28.4764025 C87.1114078,28.4764025 88.6808079,26.7034024 88.6808079,24.5524022 L88.6808079,24.5524022 Z M77.1708069,24.5816022 C77.1708069,19.4372017 80.9492072,17.0244015 84.2338075,17.0244015 C86.1230077,17.0244015 87.6054078,17.7220016 88.5646079,18.7392017 L88.5646079,10.630001 L92.5466083,10.630001 L92.5466083,31.8478028 L88.5646079,31.8478028 L88.5646079,30.2204027 C87.6054078,31.3540028 86.0650077,32.1386029 84.1758075,32.1386029 C81.0948073,32.1386029 77.1708069,29.6970027 77.1708069,24.5816022 L77.1708069,24.5816022 Z M62.7792056,17.3152015 L66.732406,17.3152015 L66.732406,18.9428017 C67.662406,17.7510016 69.0868062,17.0244015 70.7434063,17.0244015 C74.1730066,17.0244015 76.2368068,19.2334017 76.2368068,22.9828021 L76.2368068,31.8478028 L72.1966065,31.8478028 L72.1966065,23.5060021 C72.1966065,21.5586019 71.2956064,20.4250018 69.5228062,20.4250018 C68.0112061,20.4250018 66.761406,21.4714019 66.761406,23.9128021 L66.761406,31.8478028 L62.7792056,31.8478028 L62.7792056,17.3152015 Z M30.2666027,28.3310025 L33.958203,25.4242023 C35.0044031,27.2266024 36.6612033,28.2728025 38.5502034,28.2728025 C40.6142036,28.2728025 41.7188037,26.9360024 41.7188037,25.4824023 C41.7188037,23.7386021 39.5966035,23.1866021 37.3296033,22.488602 C34.4814031,21.6168019 31.3130028,20.5124018 31.3130028,16.4430015 C31.3130028,13.0424012 34.2780031,10.3392009 38.3760034,10.3392009 C41.8350037,10.3392009 43.8114039,11.647201 45.5264041,13.4204012 L42.1836038,15.9490014 C41.3118037,14.6412013 40.0620036,13.9434012 38.4050034,13.9434012 C36.5158033,13.9434012 35.4988032,14.9608013 35.4988032,16.2978015 C35.4988032,17.9254016 37.5332034,18.4780017 39.8002036,19.2334017 C42.6780038,20.1634018 45.9332041,21.4424019 45.9332041,25.5118023 C45.9332041,28.8832026 43.2590039,32.1386029 38.5794034,32.1386029 C34.7430031,32.1386029 32.1852029,30.5112027 30.2666027,28.3310025 L30.2666027,28.3310025 Z" id="Fill-1" fill="currentColor"></path><polygon id="Fill-2" fill="#9DD6E3" points="8.52940076 31.8478028 17.0162015 31.8478028 17.0162015 23.3610021 8.52940076 23.3610021"></polygon><polygon id="Fill-3" fill="#9DD6E3" points="0.0426000038 23.3614021 8.52940076 23.3614021 8.52940076 14.8744013 0.0426000038 14.8744013"></polygon><polygon id="Fill-4" fill="#3F72AB" points="0.0428000038 31.8478028 8.52960076 31.8478028 8.52960076 23.3610021 0.0428000038 23.3610021"></polygon><polygon id="Fill-5" fill="#00A9D1" points="17.0162015 23.3614021 25.5030023 23.3614021 25.5030023 14.8744013 17.0162015 14.8744013"></polygon><polygon id="Fill-6" fill="#00A9D1" points="8.52940076 14.8746013 17.0162015 14.8746013 17.0162015 6.38780057 8.52940076 6.38780057"></polygon><polygon id="Fill-7" fill="#2191C4" points="8.52940076 23.3612021 17.0162015 23.3612021 17.0162015 14.8744013 8.52940076 14.8744013"></polygon><polygon id="Fill-8" fill="#3F72AB" points="17.0162015 14.8746013 25.5030023 14.8746013 25.5030023 6.38780057 17.0162015 6.38780057"></polygon><polyline id="Fill-9" fill="currentColor" points="34.2702031 1.26060011 34.2702031 6.20820056 33.125603 6.20820056 33.125603 1.26060011 31.3618028 1.26060011 31.3618028 0.270800024 36.0398032 0.270800024 36.0380032 1.26060011 34.2702031 1.26060011"></polyline><polyline id="Fill-10" fill="currentColor" points="44.382604 6.20820056 43.2984039 6.20820056 41.9818038 1.88840017 40.6654036 6.20820056 39.5898035 6.20820056 37.9304034 0.243000022 39.1316035 0.259400023 40.2350036 4.4614004 41.4742037 0.270800024 42.6186038 0.270800024 43.8578039 4.4614004 44.942004 0.270800024 46.0864041 0.270800024 44.382604 6.20820056"></polyline><polygon id="Fill-11" fill="currentColor" points="48.3440043 6.20820056 49.4884044 6.20820056 49.4884044 0.270800024 48.3440043 0.270800024"></polygon><polyline id="Fill-12" fill="currentColor" points="52.1398047 6.20820056 52.1398047 0.270800024 53.2844048 0.270800024 53.2844048 5.20140047 55.2634049 5.20140047 55.2734049 6.20820056 52.1398047 6.20820056"></polyline><polygon id="Fill-13" fill="currentColor" points="57.6488052 6.20820056 58.7932053 6.20820056 58.7932053 0.270800024 57.6488052 0.270800024"></polygon><path d="M64.0000057,1.1058001 C62.9846056,1.1058001 62.3738056,1.94040017 62.3738056,3.23980029 C62.3738056,4.53920041 62.9846056,5.37360048 64.0000057,5.37360048 C65.0240058,5.37360048 65.6350059,4.53920041 65.6350059,3.23980029 C65.6350059,1.94040017 65.0156058,1.1058001 64.0000057,1.1058001 M63.9916057,6.32040057 C62.3048056,6.32040057 61.2124055,5.08100045 61.2124055,3.24800029 C61.2124055,1.40660013 62.3134056,0.159200014 64.0086057,0.159200014 C65.7126059,0.159200014 66.787806,1.39780012 66.787806,3.23100029 C66.787806,5.06360045 65.6954059,6.32040057 63.9916057,6.32040057" id="Fill-14" fill="currentColor"></path></g></g></g></g></svg>
                    </LinkNewTab>
                    <LinkNewTab href={'https://authjs.dev'}>
                        <div className="flex items-center  justify-center">
                            <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg"xmlnsXlink="http://www.w3.org/1999/xlink"width="245.07"height="72mm"version="1.1"viewBox="0 0 64.841 72"><defs><linearGradient id="linearGradient173"><stop offset="0" stopColor="#27ffa7" stopOpacity="1"></stop><stop offset="1" stopColor="#2acaff" stopOpacity="1"></stop></linearGradient><linearGradient id="linearGradient171"><stop offset="0" stopColor="#1600b9" stopOpacity="0.86"></stop><stop offset="0.733" stopColor="#ab2df1" stopOpacity="1"></stop><stop offset="1" stopColor="#e338ff" stopOpacity="1"></stop></linearGradient><radialGradient id="radialGradient172"cx="7.033"cy="41.145"r="26.229"fx="7.033"fy="41.145"gradientTransform="matrix(-1.30062 -.00761 -.00919 1.56968 67.698 -23.36)"gradientUnits="userSpaceOnUse"xlinkHref="#linearGradient171"></radialGradient><radialGradient id="radialGradient175"cx="58.533"cy="26.995"r="32.421"fx="58.533"fy="26.995"gradientTransform="matrix(-1.28939 .0442 .05204 1.5179 80.74 -16.887)"gradientUnits="userSpaceOnUse"xlinkHref="#linearGradient173"></radialGradient></defs><g fillOpacity="1"fillRule="nonzero"stroke="none"strokeLinecap="round"strokeLinejoin="round"strokeWidth="0.456"paintOrder="stroke markers fill"transform="translate(-.182)"><path fill="url(#radialGradient172)"d="M65.024 10L12.565 51s7.071 12.053 20.09 21c0 0 32.369-21 32.369-62"display="inline"></path><path fill="url(#radialGradient175)"d="M32.656 0L.206 10.03S-.932 31.303 12.566 51l52.458-41z"></path><path fill="#000"fillOpacity="0.066"d="M32.656 0v72s32.368-21 32.368-62z"></path></g></svg>
                            <span className="text-xl">Auth.js</span>
                        </div>
                    </LinkNewTab>


 
                    
                </div>
                
            </div>

    </main>
)

export const LinkNewTab = ({children,href}:{children:ReactNode,href:string}) => (
    <Link 
        className="hover:brightness-110" href={href} target="_blank" tabIndex={0}>
        {children}
    </Link>
)

export default About;