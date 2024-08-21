import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Nos differents produits
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo1.jpg"
            alt="photo"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              cable reseau
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400"></p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo2.jpg"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              Camera surveillance
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400"></p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo3.jpg"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              PTZ
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Support Consultant
            </p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo4.jpg"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              Antenne
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Director of sales
            </p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo5.jpg"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              Installation
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400"></p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo6.png"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              prise en main
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400"></p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo7.png"
            alt="Avatar"
            width={500}
            height={500}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              paratonner
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Support Consultant
            </p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo8.png"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              installation
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Project Manager
            </p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo8.png"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              installation
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Project Manager
            </p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo8.png"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              installation
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Project Manager
            </p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo8.png"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              installation
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Project Manager
            </p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo8.png"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              installation
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Project Manager
            </p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="/photos/photo8.png"
            alt="Avatar"
            width={500}
            height={500}
            layout="responsive"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              installation
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Project Manager
            </p>
            <Link
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="services"
            >
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
