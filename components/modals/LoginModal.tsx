"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import NewsLetterForm from "@/components/common/NewsLetterForm";

export default function LoginModal() {
  const modalElement = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const showModal = async () => {
      const bootstrap = await import("bootstrap"); // dynamically import bootstrap
      const modalDom = document.getElementById("modallogin");
      if (!modalDom) return;
      const myModal = new bootstrap.Modal(modalDom, {
        keyboard: false,
      });

      // Show the modal after a delay using a promise
      await new Promise((resolve) => setTimeout(resolve, 2000));
      myModal.show();

      modalElement.current?.addEventListener("hidden.bs.modal", () => {
        myModal.hide();
      });
    };

    showModal();
  }, []);

  return (
    <div
      className="modal fade modalCenter auto-popup"
      ref={modalElement}
      id="modallogin"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-xl">
          <div className="wg-new-letter">
            <div className="image">
              <Image
                src="/image/section/img-new-letter.jpg"
                alt=""
                className="lazyload"
                width={440}
                height={440}
              />
            </div>
            <div className="new-letter-content text-center">
              <div className="heading">
                <div className="label text-btn-uppercase color-primary mb-8">
                  Suscribete al Newletter!
                </div>
                <h5 className="color-on-suface-container">
                  Suscríbete para recibir actualizaciones
                  <br />
                  sobre nuestras últimas noticias.
                </h5>
              </div>

              <NewsLetterForm placeholder="Correo electrónico" variant="modal" />

              <ul className="tf-social radius-50 g-8 color-on-suface-container">
                <li className="item">
                  <a
                    href="https://www.youtube.com/@Isurki613"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="#FF0000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              data-bs-dismiss="modal"
              className="icon-new-letter btn-hide-popup"
            >
              <i className="icon-close1"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}