import React, { useRef, useEffect } from 'react';
import {
	Box,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';

import { gsap } from 'gsap';
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Home.css';

const CustomLink = styled(Link)`
	text-decoration: none;
`;

const Home = () => {
	const boxPicture01 = useRef();
	const boxPicture03 = useRef();
	const boxPicture04 = useRef();

	useEffect(() => {
		gsap
			.timeline({
				duration: 6,
				repeat: -1,
				repeatDelay: 6,
				yoyo: false,
			})
			.to(boxPicture01.current, { opacity: 0 }, '>6')
			.to(boxPicture03.current, { opacity: 0 }, '>6')
			.to(boxPicture04.current, { opacity: 0 }, '>6');
	});
	return (
		<>
			<Box className='highlight'>
				<Box className='picture01' ref={boxPicture01}></Box>
				<Box className='picture03' ref={boxPicture03}></Box>
				<Box className='picture04' ref={boxPicture04}></Box>
			</Box>
			<Box className='section-two'>
				<Container>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
						}}>
						<Typography
							sx={{
								marginTop: '24px',
								color: '#1a47ac',
								fontSize: '2rem',
								fontWeight: 'bold',
								marginBottom: '48px',
							}}>
							DỊCH VỤ
						</Typography>
					</Box>
					<Grid container spacing={4}>
						<Grid
							item
							md={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<CustomLink
								className='dichvu01'
								to='dich-vu/quan-ly-chung-cu'></CustomLink>
							<CustomLink to='dich-vu/quan-ly-chung-cu'>
								<Typography
									sx={{
										margin: '12px 0px',
										color: '#1a47ac',
										fontSize: '1rem',
										fontWeight: '500',
									}}>
									QUẢN LÝ CHUNG CƯ
								</Typography>
							</CustomLink>
							<CustomLink to='dich-vu/quan-ly-chung-cu'>
								<Typography color={'black'}>
									TSC6 nhận thức được mối quan tâm lớn nhất của các chủ sở hữu
									nhà chung cư đặt ra đối với công tác quản lý vận hành nhà
									chung cư, đó là: Hạn chế tối đa các rủi ro; vận hành an toàn
									hiệu quả; giảm thiểu chi phí; đảm bảo chất lượng dịch vụ; đảm
									bảo gia tăng giá trị bất động sản.
								</Typography>
							</CustomLink>
						</Grid>
						<Grid
							item
							md={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<Link className='dichvu02' href='#'></Link>
							<Link href='#' underline='none'>
								<Typography
									sx={{
										margin: '12px 0px',
										color: '#1a47ac',
										fontSize: '1rem',
										fontWeight: '500',
									}}>
									QUẢN LÝ VĂN PHÒNG
								</Typography>
							</Link>
							<Link href='#' underline='none'>
								<Typography color={'black'}>
									Chủ đầu tư và người sử dụng văn phòng luôn mong muốn có đơn vị
									quản lý chuyên nghiệp nhằm đảm bảo tòa nhà có tỉ lệ sử dụng
									cao, chi phí vận hành và bảo dưỡng tiết kiệm nhưng vẫn mang
									lại hiệu quả, an toàn, nâng giá trị bất động sản và vị thế các
									doanh nghiệp hoạt động trong tòa nhà.
								</Typography>
							</Link>
						</Grid>
						<Grid
							item
							md={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<Link className='dichvu03' href='#'></Link>
							<Link href='#' underline='none'>
								<Typography
									sx={{
										margin: '12px 0px',
										color: '#1a47ac',
										fontSize: '1rem',
										fontWeight: '500',
									}}>
									QUẢN LÝ BĐS KHÁC
								</Typography>
							</Link>
							<Link href='#' underline='none'>
								<Typography color={'black'}>
									Đội ngũ nhân sự của công ty TSC6 được đào tạo nghiệp vụ,
									chuyên môn quản lý vận hành, và nhiều kinh nghiệm thực tế.
									Chúng tôi đã khẳng định chất lượng dịch vụ quản lý cho nhiều
									loại hình bất động sản: tòa nhà hỗn hợp, trung tâm thương mại,
									căn hộ du lịch - nghỉ dưỡng...
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box className='section-three'>
				<Container>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
						}}>
						<Typography
							sx={{
								marginTop: '24px',
								color: '#1a47ac',
								fontSize: '2rem',
								fontWeight: 'bold',
								marginBottom: '48px',
							}}>
							DỰ ÁN
						</Typography>
					</Box>
					<Grid container spacing={4}>
						<Grid
							item
							md={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<Link className='duan01' href='#'></Link>
							<Link href='#' underline='none'>
								<Typography
									sx={{
										margin: '12px 0px',
										color: '#1a47ac',
										fontSize: '1rem',
										fontWeight: '500',
									}}>
									DIAMOND FLOWER
								</Typography>
							</Link>
						</Grid>
						<Grid
							item
							md={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<Link className='duan02' href='#'></Link>
							<Link href='#' underline='none'>
								<Typography
									sx={{
										margin: '12px 0px',
										color: '#1a47ac',
										fontSize: '1rem',
										fontWeight: '500',
									}}>
									GOLDEN PALM
								</Typography>
							</Link>
						</Grid>
						<Grid
							item
							md={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<Link className='duan03' href='#'></Link>
							<Link href='#' underline='none'>
								<Typography
									sx={{
										margin: '12px 0px',
										color: '#1a47ac',
										fontSize: '1rem',
										fontWeight: '500',
									}}>
									MARINA SUITES
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box className='section-four'>
				<Container>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
						}}>
						<Typography
							sx={{
								marginTop: '24px',
								color: '#1a47ac',
								fontSize: '2rem',
								fontWeight: 'bold',
								marginBottom: '48px',
							}}>
							THUÊ MUA
						</Typography>
					</Box>
					<Grid container spacing={4}>
						<Grid
							item
							md={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<Link className='thuemua01' href='#'></Link>
							<Link href='#' underline='none'>
								<Typography
									sx={{
										margin: '12px 0px',
										color: '#1a47ac',
										fontSize: '1rem',
										fontWeight: '500',
									}}>
									VĂN PHÒNG - DIAMOND FLOWER - HÀ NỘI
								</Typography>
							</Link>
						</Grid>
						<Grid
							item
							md={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<Link className='thuemua02' href='#'></Link>
							<Link href='#' underline='none'>
								<Typography
									sx={{
										margin: '12px 0px',
										color: '#1a47ac',
										fontSize: '1rem',
										fontWeight: '500',
									}}>
									CĂN HỘ - GREEN DIAMOND - HẠ LONG
								</Typography>
							</Link>
						</Grid>
						<Grid
							item
							md={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<Link className='thuemua03' href='#'></Link>
							<Link href='#' underline='none'>
								<Typography
									sx={{
										margin: '12px 0px',
										color: '#1a47ac',
										fontSize: '1rem',
										fontWeight: '500',
									}}>
									CONDOTEL - MARINA SUITES - NHA TRANG
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box className='section-five'>
				<Container>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
						}}>
						<Typography
							sx={{
								marginTop: '24px',
								color: '#1a47ac',
								fontSize: '2rem',
								fontWeight: 'bold',
								marginBottom: '48px',
							}}>
							TIN TỨC
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item md={3}>
							<Stack direction={'column'}>
								<Box>
									<Link className='tintuc01' href='#'></Link>
									<Link href='#' underline='none'>
										<Typography sx={{ marginTop: '10px' }}>
											Hoạt động ủng hộ công tác phòng chống dịch COVID - 19 của
											công ty TSC6
										</Typography>
									</Link>
								</Box>
								<Divider
									orientation='horizontal'
									flexItem
									color={'white'}
									sx={{ height: '20px', marginBottom: '10px' }}
								/>
								<Box>
									<Link className='tintuc02' href='#'></Link>
									<Link href='#' underline='none'>
										<Typography sx={{ marginTop: '10px' }}>
											Thực hành quy trình thao tác vận hành tủ hòa đồng bộ tại
											Diamond Flower
										</Typography>
									</Link>
								</Box>
							</Stack>
						</Grid>
						<Divider
							orientation='vertical'
							flexItem
							color={'white'}
							sx={{ marginLeft: '10px', marginTop: '8px' }}
						/>
						<Grid item md={5}>
							<Link className='tintuc04' href='#'></Link>
							<Link href='#' underline='none'>
								<Typography sx={{ marginTop: '10px', fontWeight: '600' }}>
									Thực hành quy trình xử lý tình huống báo cháy, chữa cháy & cứu
									nạn, cứu hộ tại Diamond Flower
								</Typography>
								<Typography sx={{ marginTop: '20px' }}>
									1. Thời gian: 8h30’ – 12h00’ Thứ 7 ngày 25/06/2022.
								</Typography>
								<Typography sx={{ marginTop: '5px' }}>
									2. Địa điểm:Hội trường tầng 4 nhà xuất bản giáo dục.
								</Typography>
								<Typography sx={{ marginTop: '5px' }}>
									3. Thành phần Bộ phận kỹ thuật tham gia: Tất cả thành viên của
									bộ phận kỹ thuật.
								</Typography>
							</Link>
						</Grid>
						<Divider
							orientation='vertical'
							flexItem
							color={'white'}
							sx={{ marginLeft: '10px', marginTop: '8px' }}
						/>
						<Grid item md={3}>
							<Stack direction={'column'}>
								<Box>
									<Link className='tintuc03' href='#'></Link>
									<Link href='#' underline='none'>
										<Typography sx={{ marginTop: '10px' }}>
											Tuyển Dụng Kỹ thuật viên vận hành tòa nhà tại Hà nội. Số
											lượng : 05. Mức lương: 7 - 10 triệu.
										</Typography>
									</Link>
								</Box>
								<Divider
									orientation='horizontal'
									flexItem
									color={'white'}
									sx={{ height: '20px', marginBottom: '10px' }}
								/>
								<Box>
									<Link className='tintuc05' href='#'></Link>
									<Link href='#' underline='none'>
										<Typography sx={{ marginTop: '10px' }}>
											Tuyển Dụng Lễ tân tòa nhà tại Hà nội. Số lượng: 03. Mức
											lương: 6 - 7.5 triệu.
										</Typography>
									</Link>
								</Box>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box className='section-six'>
				<Container>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
						}}>
						<Typography
							sx={{
								marginTop: '24px',
								color: '#ffffff',
								fontSize: '2rem',
								fontWeight: 'bold',
								marginBottom: '48px',
							}}>
							ĐỐI TÁC
						</Typography>
					</Box>
					<Box>
						<Swiper
							slidesPerView={7}
							spaceBetween={30}
							slidesPerGroup={3}
							loop={true}
							loopFillGroupWithBlank={true}
							centeredSlides={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Autoplay, Pagination, Navigation]}>
							<SwiperSlide className='slide1'></SwiperSlide>
							<SwiperSlide className='slide2'></SwiperSlide>
							<SwiperSlide className='slide3'></SwiperSlide>
							<SwiperSlide className='slide4'></SwiperSlide>
							<SwiperSlide className='slide5'></SwiperSlide>
							<SwiperSlide className='slide6'></SwiperSlide>
						</Swiper>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Home;
